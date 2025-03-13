document.addEventListener('DOMContentLoaded', function () {

    // Open portfolio on startup
    internetExplorerWindow.style.display = "flex"
    openApplication('internetExplorerWindow', 'Internet Explorer', 'icons/ie-s.png')

    // Toggle button integration
    const toggleButtons = document.querySelectorAll('.toggle-button')

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('pressed')
        })
    })

    // Draggable windows
    let startX, startY, offsetX = 0, offsetY = 0
    let activeWindow = null

    // Function to handle mouse down event on title bar
    function titleBarMouseDown(e) {
        // Prevent dragging if window is maximized
        if (this.isMaximized) return

        // Prevent dragging if it is on the title bar controls
        const titleBarControls = this.querySelector(".title-bar-controls")
        if (titleBarControls && titleBarControls.contains(e.target)) return

        // Store mouse position and create mouseMove and mouseUp event
        startX = e.clientX
        startY = e.clientY
        activeWindow = this
        const transformStyle = this.style.transform
        offsetX = parseInt(transformStyle.split('(')[1].split('px')[0])
        offsetY = parseInt(transformStyle.split(',')[1].split('px')[0])

        this.querySelector('.title-bar').classList.add('grabbing')

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    // On mouse move calculate the new translate value
    function handleMouseMove(e) {
        const x = e.clientX - startX + offsetX
        const y = e.clientY - startY + offsetY

        if (activeWindow) {
            activeWindow.style.transform = `translate(${x}px, ${y}px)`
        }
    }

    // On mouse up release the window and remove the events
    function handleMouseUp() {
        if (activeWindow) {
            activeWindow.querySelector('.title-bar').classList.remove('grabbing')
        }

        activeWindow = null

        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    // Attach event listeners to each window
    const windows = document.querySelectorAll('.window')
    windows.forEach(window => {
        window.style.transform = 'translate(0px, 0px)'
        window.isMinimized = false
        window.isMaximized = false

        // Event on clicking a window
        window.addEventListener('mousedown', function () {
            handleWindowMouseDown(this, windows)
        })

        // Attach event to title bar for dragging
        const titleBar = window.querySelector('.title-bar')
        if (titleBar) {
            titleBar.addEventListener('mousedown', titleBarMouseDown.bind(window))
        }

        // Attach events to the window control buttons
        attachWindowControlEvents(window, windows)
    })

    // Function to handle mouse down event on window
    function handleWindowMouseDown(clickedWindow, allWindows) {
        // Disable all other windows except the clicked one
        allWindows.forEach(w => {
            if (w !== clickedWindow) {
                const titleBar = w.querySelector('.title-bar')
                if (titleBar) {
                    titleBar.classList.add('disabled')
                }
            }
        })

        // Disable all other taskbar app buttons except the clicked one
        const taskbarButtons = document.querySelectorAll('.taskbar-app')
        taskbarButtons.forEach(button => {
            if (button.dataset.windowId !== clickedWindow.id) {
                button.classList.remove('pressed')
            }
        })

        // Enable the clicked window
        const titleBar = clickedWindow.querySelector('.title-bar')
        if (titleBar) {
            titleBar.classList.remove('disabled')
        }

        // Enable the taskbar button corresponding to the clicked window
        const taskbarButton = document.querySelector(`.taskbar-app[data-window-id="${clickedWindow.id}"]`)
        if (taskbarButton) {
            taskbarButton.classList.add('pressed')
        }

        // Bring enabled window to front
        bringToFront(clickedWindow)
    }

    // Function to attach events to window control buttons
    function attachWindowControlEvents(window, allWindows) {
        const closeButton = window.querySelector('.title-bar-controls button[aria-label="Close"]')
        if (closeButton) {
            closeButton.addEventListener('click', closeWindow)
        }

        const maximizeButton = window.querySelector('.title-bar-controls button[aria-label="Maximize"]')
        if (maximizeButton) {
            maximizeButton.addEventListener('click', maximizeWindow.bind(window))
        }

        const minimizeButton = window.querySelector('.title-bar-controls button[aria-label="Minimize"]')
        if (minimizeButton) {
            minimizeButton.addEventListener('click', function () {
                minimizeWindow(window)
            })
        }
    }

    // Handle clicks outside windows
    document.body.addEventListener('mousedown', function (e) {
        const clickedElement = e.target

        if (!clickedElement.closest('.window') && !clickedElement.closest('.taskbar-app')) {
            // If clicked outside a window and taskbar app, unpress all taskbar app buttons
            const taskbarButton = document.querySelectorAll('.taskbar-app')
            taskbarButton.forEach(button => {
                button.classList.remove('pressed')

                // Disable the corresponding window
                const windowId = button.dataset.windowId
                const window = document.getElementById(windowId)
                if (window) {
                    const titleBar = window.querySelector('.title-bar')
                    if (titleBar) {
                        titleBar.classList.add('disabled')
                    }
                }
            })
        }
        if (!clickedElement.closest('.startmenu') && !clickedElement.closest('#startButton')) {
            // Close the start menu on click outside of the start menu and start button
            startMenu.classList.remove('show')
            startButton.classList.remove('pressed')
        }
    })
})

// Function to close a window
function closeWindow() {
    const window = this.closest('.window')

    // Add closing animation
    window.style.transform = 'scale(0.0001)'
    window.style.transition = 'transform 0.25s ease-out'

    // Remove animation after it has finished, so it does not interfere with dragging translation
    setTimeout(() => {
        window.style.transform = 'translate(0px, 0px)'
        window.style.transition = 'none'
        window.style.display = 'none'
    }, 250)

    // Remove taskbar button associated with the closed window
    const taskbarButton = document.querySelector(`.taskbar-app[data-window-id="${window.id}"]`)
    if (taskbarButton) {
        taskbarButton.remove()
    }
}

// Function to maximize a window
function maximizeWindow() {
    if (!this.isMaximized && !this.classList.contains('maximized')) {
        // Maximize if window is not already maximized
        this.isMaximized = true;

        // Save original window position if it exists
        if (this.style.transform) {
            this.dataset.originalTranslateX = this.style.transform.split('(')[1].split('px')[0];
            this.dataset.originalTranslateY = this.style.transform.split(',')[1].split('px')[0];
        }

        // Add animation for maximizing
        this.style.transition = 'width 0.3s ease, height 0.3s, top 0.3s, left 0.3s, transform 0.3s ease';

        // Remove translation to center window if it exists
        if (this.style.transform) {
            this.style.transform = 'translate(0px, 0px)';
        }
    } else {
        // Unmaximize if window is already maximized
        this.isMaximized = false;

        // Remove animation after it has finished, so it does not interfere with dragging translation
        setTimeout(() => {
            this.style.transition = 'none';
        }, 300);

        // Restore window to its original positioning before maximizing if it exists
        if (this.dataset.originalTranslateX && this.dataset.originalTranslateY) {
            const originalTranslateX = parseInt(this.dataset.originalTranslateX || '0');
            const originalTranslateY = parseInt(this.dataset.originalTranslateY || '0');
            this.style.transform = `translate(${originalTranslateX}px, ${originalTranslateY}px)`;
        }
    }
    this.classList.toggle('maximized');
}

// Function to minimize a window
function minimizeWindow(window) {
    if (!window.isMinimized) {
        // Minimize if window is not already minimized
        window.isMinimized = true

        // Save original window position
        window.dataset.originalTranslateX = window.style.transform.split('(')[1].split('px')[0]
        window.dataset.originalTranslateY = window.style.transform.split(',')[1].split('px')[0]

        // Add animation for closing
        window.style.transform = 'scale(0.0001)'
        window.style.transition = 'transform 0.25s ease-out'

        // Remove animation after it has finished, so it does not interfere with dragging translation
        setTimeout(() => {
            window.style.display = 'none'
            window.style.transform = 'translate(0px, 0px)'
            window.style.transition = 'none'
        }, 250)

        // Unpress taskbar button associated with the minimized window
        const taskbarButton = document.querySelector(`.taskbar-app[data-window-id="${window.id}"]`)
        if (taskbarButton) {
            taskbarButton.classList.remove('pressed')
        }
    }
}

let isResizedOnce = false;

// Function to automatically maximize windows when screen is small
function maximizeOnScreenWidth() {
    const screenWidth = window.innerWidth;
    const thresholdWidth = 768; // Width when window will be automatically maximized

    if (screenWidth < thresholdWidth && !isResizedOnce) {
        // Maximize all windows that are not already maximized
        const windows = document.querySelectorAll('.window');
        windows.forEach(window => {
            if (!window.classList.contains('maximized')) {
                maximizeWindow.call(window); // Call maximizeWindow
                bringToFront(window)
            }
        });

        isResizedOnce = true;
    } else if (screenWidth >= thresholdWidth && isResizedOnce) {
        isResizedOnce = false;
    }
}

window.addEventListener('resize', maximizeOnScreenWidth);

// Initial call to maximizeOnScreenWidth on page load
maximizeOnScreenWidth();

// Function to open application windows
const openWindows = {}

function openApplication(windowId, appName, iconSrc) {
    // Check if the application already has an opened window
    const existingButton = document.querySelector(`.taskbar-app[data-window-id="${windowId}"]`)
    if (existingButton) {
        // If application has already been opened press in its taskbar button
        existingButton.classList.toggle('pressed')
        existingButton.focus()
        openWindows[windowId].isMinimized = false

    } else {
        // Create a new taskbar button
        const appButton = document.createElement('button')
        appButton.classList.add('taskbar-box', 'taskbar-app', 'border-out', 'toggle-button', 'pressed')
        appButton.innerHTML = `<img class="img-s" src="${iconSrc}" alt="${appName}"><div class="taskbar-app-text">${appName}</div>`
        appButton.dataset.windowId = windowId

        // Add click event for the new taskbar application button
        appButton.addEventListener('click', function () {
            const window = document.getElementById(windowId)
            const titleBar = window.querySelector('.title-bar')

            // Bring the window to the front
            bringToFront(window)

            // Check if the window corresponding to the clicked button is disabled
            if (titleBar && titleBar.classList.contains('disabled')) {
                // Enable the window
                titleBar.classList.remove('disabled')

                // Press its taskbar button
                this.classList.add('pressed')

                // Unpress all other taskbar buttons
                const allTaskbarButtons = document.querySelectorAll('.taskbar-app')
                allTaskbarButtons.forEach(button => {
                    if (button !== this) {
                        button.classList.remove('pressed')
                    }
                })

                // Disable all other windows
                const windows = document.querySelectorAll('.window')
                windows.forEach(w => {
                    if (w !== window) {
                        const otherTitleBar = w.querySelector('.title-bar')
                        if (otherTitleBar) {
                            otherTitleBar.classList.add('disabled')
                        }
                    }
                })
            } else {
                if (window.isMinimized) {
                    // Unminimize the window
                    window.isMinimized = false

                    window.style.display = "flex"
                    if (titleBar) {
                        titleBar.classList.remove('disabled') // Re-enable the title bar
                    }

                    this.classList.add('pressed')

                    // Restore window to its original positioning
                    const originalTranslateX = parseInt(window.dataset.originalTranslateX || '0')
                    const originalTranslateY = parseInt(window.dataset.originalTranslateY || '0')
                    window.style.transform = `translate(${originalTranslateX}px, ${originalTranslateY}px)`

                } else {
                    // Minimize the window
                    minimizeWindow(window)
                    this.classList.remove('pressed')
                }
            }

            // Unpress all taskbar buttons except the one corresponding to the clicked window
            const allTaskbarButtons = document.querySelectorAll('.taskbar-app')
            allTaskbarButtons.forEach(button => {
                const buttonWindowId = button.dataset.windowId
                if (buttonWindowId !== windowId) {
                    button.classList.remove('pressed')

                    // Disable the corresponding window's title bar
                    const otherWindow = document.getElementById(buttonWindowId)
                    if (otherWindow) {
                        const otherTitleBar = otherWindow.querySelector('.title-bar')
                        if (otherTitleBar) {
                            otherTitleBar.classList.add('disabled')
                        }
                    }
                }
            })
        })

        // Append the app button to the taskbar
        const taskbarLeft = document.querySelector('.taskbar-left')
        taskbarLeft.appendChild(appButton)

        // Store the reference to the taskbar button
        openWindows[windowId] = { button: appButton, isMinimized: false }
    }
}

// Opening an application through its icon on the main desktop or startmenu
// File Explorer
const fileExplorerApps = document.querySelectorAll('.fileExplorerApp')
const fileExplorerWindow = document.getElementById('fileExplorerWindow')
fileExplorerApps.forEach(function (fileExplorerApp) {
    fileExplorerApp.addEventListener("dblclick", function () {
        fileExplorerWindow.style.display = "flex"
        openApplication('fileExplorerWindow', 'File Explorer', 'icons/file-s.png')

        const window = document.getElementById('fileExplorerWindow')
        bringToFront(window)

        const titleBar = window.querySelector('.title-bar')
        titleBar.classList.remove('disabled')

        // Close startmenu
        startMenu.classList.remove('show')
        startButton.classList.remove('pressed')
    })
})

// Internet Explorer
const internetExplorerApps = document.querySelectorAll('.internetExplorerApp')
const internetExplorerWindow = document.getElementById('internetExplorerWindow')
internetExplorerApps.forEach(function (internetExplorerApp) {
    internetExplorerApp.addEventListener("dblclick", function () {
        internetExplorerWindow.style.display = "flex"
        openApplication('internetExplorerWindow', 'Internet Explorer', 'icons/ie-s.png')

        const window = document.getElementById('internetExplorerWindow')
        bringToFront(window)

        const titleBar = window.querySelector('.title-bar')
        titleBar.classList.remove('disabled')

        // Close startmenu
        startMenu.classList.remove('show')
        startButton.classList.remove('pressed')
    })
})

const portfolioApps = document.querySelectorAll('.portfolioApp')
portfolioApps.forEach(function (portfolioApp) {
    portfolioApp.addEventListener("dblclick", function () {
        fileExplorerWindow.style.display = "flex"
        openApplication('fileExplorerWindow', 'File Explorer', 'icons/file-s.png')

        const window = document.getElementById('fileExplorerWindow')
        bringToFront(window)

        const titleBar = window.querySelector('.title-bar')
        titleBar.classList.remove('disabled')

        // Close startmenu
        startMenu.classList.remove('show')
        startButton.classList.remove('pressed')

        openDirectory('dirPortfolio')
    })
})

// Variables to store navigation history
let navigationHistory = []
let historyIndex = -1

// Function to update navigation history
function updateNavigationHistory(directoryId) {
    // Check if directoryId already exists in history, remove it and all directories after it
    const index = navigationHistory.indexOf(directoryId)
    if (index !== -1) {
        navigationHistory.splice(index, navigationHistory.length - index)
    }
    // Add new directoryId to history
    navigationHistory.push(directoryId)
    // Update history index
    historyIndex = navigationHistory.length - 1
}

// Event listener for the backward button
const backwardButton = document.querySelector('.backward')
backwardButton.addEventListener('click', function () {
    if (historyIndex > 0) {
        historyIndex--
        const directoryId = navigationHistory[historyIndex]
        openDirectory(directoryId)
    }
    disableNavIcons()
})

// Event listener for the forward button
const forwardButton = document.querySelector('.forward')
forwardButton.addEventListener('click', function () {
    if (historyIndex < navigationHistory.length - 1) {
        historyIndex++
        const directoryId = navigationHistory[historyIndex]
        openDirectory(directoryId)
    }
    disableNavIcons()
})

function disableNavIcons() {
    if (historyIndex === navigationHistory.length - 1) {
        forwardButton.classList.add('disabled-nav')
    } else {
        forwardButton.classList.remove('disabled-nav')
    }

    if (historyIndex === 0) {
        backwardButton.classList.add('disabled-nav')
    } else {
        backwardButton.classList.remove('disabled-nav')
    }
}

// Event listener for opening directories
const directoryButtons = document.querySelectorAll('.fe-directory')
directoryButtons.forEach(directoryButton => {
    directoryButton.addEventListener('dblclick', function () {
        const directoryId = this.getAttribute('data-directory')
        openDirectory('dirNone')
    })
})

// Function to open a directory inside the file explorer window
function openDirectory(directoryId) {
    // Update navigation history if the directory is not already in history
    if (historyIndex === -1 || navigationHistory[historyIndex] !== directoryId) {
        updateNavigationHistory(directoryId)
    }

    // Hide all directory contents
    const allDirectories = document.querySelectorAll('.fe-files')
    allDirectories.forEach(directory => {
        directory.style.display = 'none'
    })

    // Show the selected directory
    const selectedDirectory = document.getElementById(directoryId)
    if (selectedDirectory) {
        selectedDirectory.style.display = 'grid'
    }

    // Update the address input with the path of the opened directory
    const addressInput = document.getElementById('adress')
    if (addressInput) {
        // Get the path of the opened directory based on its ID
        const directoryPath = getPathById(directoryId)
        // Set the value of the address input to the directory path
        addressInput.value = directoryPath
    }
    disableNavIcons()
}


// Event listener for the address input field
const addressInput = document.getElementById('adress')
addressInput.addEventListener('keydown', addressSearch)

// Event listener for the address button
const adressBtn = document.getElementById('adressBtn')
adressBtn.addEventListener('click', addressSearch)

function addressSearch(event) {
    // Check if the Enter key is pressed (key code 13) or if it's a button click event
    if (event.keyCode === 13 || event.type === 'click') {
        // If it's a click event and not a keyboard event, prevent default action
        if (event.type === 'click') {
            event.preventDefault()
        }

        // Get the entered address from the input field
        const enteredAddress = addressInput.value.trim()

        // Find the corresponding directory ID based on the entered address
        const directoryId = findDirectoryIdByAddress(enteredAddress)

        // Open the directory if a valid directory ID is found
        if (directoryId) {
            openDirectory(directoryId)
        } else {
            // Handle case when entered address does not match any directory
            alert('Adress not found!')
        }
    }
}

// Function to find the directory ID based on the entered address
function findDirectoryIdByAddress(enteredAddress) {
    const directoryPaths = {
        'Portfolio': 'dirPortfolio',
    }

    // Iterate through directory paths to find a matching address
    for (const path in directoryPaths) {
        if (directoryPaths.hasOwnProperty(path) && path.toLowerCase() === enteredAddress.toLowerCase()) {
            return directoryPaths[path]
        }
    }

    // Return null if no matching directory ID is found
    return null
}

// Function to get the path of a directory based on its ID
function getPathById(directoryId) {
    // Define the path for each directory ID
    const directoryPaths = {
        'dirNone': '',
        'dirPortfolio': 'Portfolio'
    }
    // Return the path corresponding to the directory ID, or a default value if not found
    return directoryPaths.hasOwnProperty(directoryId) ? directoryPaths[directoryId] : ''
}

// Initial opening of default directory
openDirectory('dirNone')
disableNavIcons()

// Event listener for double-clicking on directories in the initial state
const initialDirectoryButtons = document.querySelectorAll('.fe-file[data-directory]')
initialDirectoryButtons.forEach(initialDirectoryButton => {
    initialDirectoryButton.addEventListener('dblclick', function () {
        const directoryId = this.getAttribute('data-directory')
        openDirectory(directoryId)
    })
})

// README.txt
const readMeApps = document.querySelectorAll('.readMeApp')
const readMeWindow = document.getElementById('readMeWindow')
readMeApps.forEach(function (readMeApp) {
    readMeApp.addEventListener('dblclick', function () {
        readMeWindow.style.display = "flex"
        openApplication('readMeWindow', 'README.txt', 'icons/textfile-s.png')

        const window = document.getElementById('readMeWindow')
        bringToFront(window)

        const titleBar = window.querySelector('.title-bar')
        titleBar.classList.remove('disabled')

        // Close startmenu
        startMenu.classList.remove('show')
        startButton.classList.remove('pressed')
    })
})

// Function to bring a window to the front
function bringToFront(window) {
    const windows = document.querySelectorAll('.window')
    windows.forEach(w => {
        // Lower the z-index of other windows
        if (w !== window) {
            w.style.zIndex = 1
        }
    })
    // Bring this window to the front
    window.style.zIndex = windows.length
}

// Startmenu opening/closing
const startButton = document.getElementById('startButton')
const startMenu = document.querySelector('.startmenu')

startButton.addEventListener('click', function () {
    startMenu.classList.toggle('show')
})

// Volume menu opening/closing
const volumeButton = document.getElementById('volumeButton')
const volumeMenu = document.querySelector('.volume-menu')

volumeButton.addEventListener('click', function () {
    volumeMenu.classList.toggle('show')
})

// Mute/unmute volume on click of the icon
let previousVolume = 0

const volumeSlider = document.getElementById('volumeSlider')
const volumeIcon = document.querySelector('.volume-icon img')
const taskbarVolumeIcon = document.querySelector('.taskbar #volumeButton .volume-icon img')

volumeIcon.addEventListener('click', function () {
    volumeIcon.classList.toggle('muted')

    if (!volumeIcon.classList.contains('muted')) {
        volumeSlider.value = previousVolume // Unmute and restore previous volume

        // Change icons
        volumeIcon.src = 'icons/volume-s.png'
        volumeIcon.alt = 'volume'
        taskbarVolumeIcon.src = 'icons/volume-s.png'
        taskbarVolumeIcon.alt = 'volume'
    } else {
        previousVolume = volumeSlider.value // Save current volume
        volumeSlider.value = 0 // Set volume to 0

        // Change icons
        volumeIcon.src = 'icons/volume-mute-s.png'
        volumeIcon.alt = 'volume muted'
        taskbarVolumeIcon.src = 'icons/volume-mute-s.png'
        taskbarVolumeIcon.alt = 'volume muted'
    }
})

// Change icon if volume is 0
volumeSlider.oninput = function () {
    if (this.value == 0) {
        volumeIcon.classList.add('muted')
        volumeIcon.src = 'icons/volume-mute-s.png'
        volumeIcon.alt = 'volume muted'
        taskbarVolumeIcon.src = 'icons/volume-mute-s.png'
        taskbarVolumeIcon.alt = 'volume muted'
    } else {
        volumeIcon.classList.remove('muted')
        volumeIcon.src = 'icons/volume-s.png'
        volumeIcon.alt = 'volume'
        taskbarVolumeIcon.src = 'icons/volume-s.png'
        taskbarVolumeIcon.alt = 'volume'
    }
}

const dateDisplay = document.getElementById('date')
const timeDisplay = document.getElementById('time')
function displayCurrentDateTime() {
    // Get the current date and time
    const currentDate = new Date()

    // Extract individual components
    const year = currentDate.getFullYear()
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2) // Months are zero-indexed
    const day = ('0' + currentDate.getDate()).slice(-2)
    const hours = ('0' + currentDate.getHours()).slice(-2)
    const minutes = ('0' + currentDate.getMinutes()).slice(-2)
    const seconds = ('0' + currentDate.getSeconds()).slice(-2)

    // Format date and time string
    const formattedTime = `${hours}:${minutes}`
    const formattedDate = `${day}/${month}/${year}`

    // Display the formatted date and time
    timeDisplay.innerText = formattedTime
    dateDisplay.innerText = formattedDate
}

displayCurrentDateTime()

// Update the displayed date and time every second
setInterval(displayCurrentDateTime, 1000)

// Focussing files in file explorer
const fileWindows = document.querySelectorAll('.fe-files')
const fileExplorerfiles = document.querySelectorAll('.fe-file')
let focusedFiles = new Set() // Store focused files in a set

fileExplorerfiles.forEach(function (fileExplorerfile) {
    fileExplorerfile.addEventListener('mousedown', function (event) {
        event.stopPropagation()

        // Check if Ctrl key is pressed
        const isCtrlPressed = event.ctrlKey || event.metaKey

        // Toggle focus state of the clicked file
        if (isCtrlPressed) {
            // Add or remove file from focusedFiles set
            if (focusedFiles.has(fileExplorerfile)) {
                focusedFiles.delete(fileExplorerfile)
                fileExplorerfile.classList.remove('focussed')
            } else {
                focusedFiles.add(fileExplorerfile)
                fileExplorerfile.classList.add('focussed')
            }
        } else {
            // Clear focus from all other files
            focusedFiles.forEach(file => {
                if (file !== fileExplorerfile) {
                    file.classList.remove('focussed')
                    focusedFiles.delete(file)
                }
            })

            // Add focus to the clicked file
            fileExplorerfile.classList.add('focussed')
            focusedFiles.clear()
            focusedFiles.add(fileExplorerfile)
        }
    })
})

fileWindows.forEach(function (fileWindow) {
    fileWindow.addEventListener('mousedown', function () {
        // Remove 'focussed' class from all files
        fileExplorerfiles.forEach(function (fileExplorerfile) {
            fileExplorerfile.classList.remove('focussed')
        })

        // Clear the focusedFiles set
        focusedFiles.clear()
    })
})

// Fullscreen button
if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
    const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn')

    const styleEl = document.createElement('link')
    styleEl.setAttribute('rel', 'stylesheet')
    styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css')
    styleEl.addEventListener('load', function () {
        toggleBtn.hidden = false
    })
    document.head.appendChild(styleEl)

    toggleBtn.addEventListener('click', function () {
        if (document.fullscreen) {
            document.exitFullscreen()
        } else if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen()
        } else if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
        } else {
            document.documentElement.webkitRequestFullScreen()
        }
    })

    document.addEventListener('fullscreenchange', handleFullscreen)
    document.addEventListener('webkitfullscreenchange', handleFullscreen)

    function handleFullscreen() {
        if (document.fullscreen || document.webkitFullscreenElement) {
            toggleBtn.classList.add('on')
            toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode')
        } else {
            toggleBtn.classList.remove('on')
            toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode')
        }
    }
}

document.querySelector('#refreshBtn').addEventListener('click', function () {
    document.querySelector('#ie-frame').contentWindow.location.reload();
})