document.addEventListener("DOMContentLoaded", function () {

    const expandBtn = document.getElementById("expand-button");
    const header = document.querySelector("header");
    expandBtn.addEventListener("click", function () {
        expandBtn.classList.toggle("expanded");
        header.classList.toggle("expanded");
    });

    // Adding current page indication to navigation menu
    var currentPage = window.location.pathname.split("/").pop(); // Get the current page's name
    const links = document.querySelectorAll("#links li a");
    links.forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.parentNode.classList.add("current-page"); // Add class to the link element
        }
    });

    // Scroll to content ID on click of anchored link
    document.querySelectorAll('.lo-content a').forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            event.preventDefault();
            event.stopPropagation();
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log("Target element ID [" + targetId + "] not found")
            }
        });
    });

    // Function for the image attachment slideshow
    document.querySelectorAll('.attachment').forEach((attachment) => {
        const imgs = attachment.querySelectorAll('.img-container img');
        const attachmentName = attachment.querySelector('.attachment-name-text');
        const prevBtn = attachment.querySelector('.prev');
        const nextBtn = attachment.querySelector('.next');
        const attachmentControls = attachment.querySelector('.attachment-controls');
        const rectanglesContainer = document.createElement('div');
        rectanglesContainer.classList.add('rectangles-container');
        let currentImgIndex = 0;

        // Dynamically create rectangles based on the number of images
        for (let i = 0; i < imgs.length; i++) {
            const rectangle = document.createElement('div');
            rectangle.classList.add('rectangle');
            if (i === currentImgIndex) {
                rectangle.classList.add('current');
            }
            rectanglesContainer.appendChild(rectangle);
        }

        // Append rectangles container to attachment controls
        attachmentControls.insertBefore(rectanglesContainer, nextBtn);

        function extractImageName(src) {
            const parts = src.split('/');
            const filename = parts[parts.length - 1];
            return filename;
        }

        function showImage(index) {
            imgs.forEach((img, idx) => {
                img.style.display = idx === index ? 'block' : 'none';
            });
            attachmentName.textContent = extractImageName(imgs[index].getAttribute('src')); // Update the attachment name

            // Update the current class for rectangles
            const rectangles = rectanglesContainer.querySelectorAll('.rectangle');
            rectangles.forEach((rectangle, idx) => {
                if (idx === index) {
                    rectangle.classList.add('current');
                } else {
                    rectangle.classList.remove('current');
                }
            });
        }

        showImage(currentImgIndex);

        prevBtn.addEventListener('click', function () {
            currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
            showImage(currentImgIndex);
        });

        nextBtn.addEventListener('click', function () {
            currentImgIndex = (currentImgIndex + 1) % imgs.length;
            showImage(currentImgIndex);
        });

        // Function for expanding images on click
        const expandButton = attachment.querySelector('.attachment-expand');

        if (expandButton) {
            expandButton.addEventListener('click', function (event) {
                event.stopPropagation();
                const imgSrc = imgs[currentImgIndex].src;
                expandImage(imgSrc);
            });
        }

        // Allow individual images to be expanded on click
        imgs.forEach(function (image, index) {
            image.addEventListener('click', function () {
                currentImgIndex = index;
                expandImage(image.src);
            });
        });
    });

    function expandImage(src) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        let scale = 1;
        const minScale = 0.5;
        const maxScale = 1.5;

        modal.style.display = 'flex';
        modalImg.src = src;

        const zoomIn = function () {
            scale = Math.min(scale + 0.1, maxScale);
            modalImg.style.transform = `scale(${scale})`;
        };

        const zoomOut = function () {
            scale = Math.max(scale - 0.1, minScale);
            modalImg.style.transform = `scale(${scale})`;
        };

        const handleScroll = function (event) {
            if (event.deltaY < 0) {
                zoomIn();
            } else {
                zoomOut();
            }
        };

        const closeModal = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                modalImg.style.transform = 'scale(1)'; // Reset scale on close
                window.removeEventListener('wheel', handleScroll);
            }
        };

        modal.addEventListener('click', closeModal);
        document.querySelector('.close').addEventListener('click', function () {
            modal.style.display = 'none';
            modalImg.style.transform = 'scale(1)'; // Reset scale on close
            window.removeEventListener('wheel', handleScroll);
        });

        window.addEventListener('wheel', handleScroll);
    }
});