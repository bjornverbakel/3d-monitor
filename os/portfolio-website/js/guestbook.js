document.addEventListener('DOMContentLoaded', () => {
    // Generic function to handle form submission
    const handleFormSubmit = (formSelector, url) => {
        document.querySelector(formSelector).addEventListener('submit', (event) => {
            event.preventDefault();

            const feedbackMessage = document.querySelector('#feedbackMessage');
            feedbackMessage.innerHTML = ''; // Clear the feedback message

            const formData = new FormData(event.target);

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem('feedbackMessage', data.message); // Store the message in localStorage
                        window.location.href = data.redirect; // Redirect on success
                    } else {
                        feedbackMessage.innerHTML = data.message;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    feedbackMessage.innerHTML = 'An error occurred. Please try again.';
                });
        });
    };

    // Initialize forms
    ['#registerForm', '#loginForm', '#commentForm'].forEach(formSelector => {
        const form = document.querySelector(formSelector);
        if (form) {
            const actionUrl = form.getAttribute('action');
            handleFormSubmit(formSelector, actionUrl);
        }
    });

    // Display feedback message from localStorage if available
    const feedbackMessage = document.querySelector('#feedbackMessage');
    const storedMessage = localStorage.getItem('feedbackMessage');
    if (storedMessage) {
        feedbackMessage.innerHTML = storedMessage;
        localStorage.removeItem('feedbackMessage'); // Clear the message from localStorage
    }

    // Character count and limit for textarea
    const textArea = document.querySelector('#message');
    const charCount = document.getElementById('charCount');
    const maxLength = 250; // Character limit

    if (textArea) {
        textArea.maxLength = maxLength;

        const updateCharCount = () => {
            const textLength = textArea.value.length;
            charCount.textContent = `${textLength}/${maxLength}`;
            charCount.classList.toggle('error', textLength >= maxLength);
        };

        textArea.addEventListener('input', updateCharCount);

        // Initialize character count on page load
        updateCharCount();
    }

    // Load and paginate comments
    const loadPage = (page) => {
        fetch(`functions/get-comments.php?page=${page}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('comments-section').innerHTML = data;
                attachPaginationListeners(); // Re-attach listeners after loading new content
            })
            .catch(error => console.error('Error:', error));
    };

    const attachPaginationListeners = () => {
        document.querySelectorAll('.pagination-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const page = event.target.getAttribute('data-page');
                loadPage(page);
            });
        });
    };

    attachPaginationListeners(); // Initial call to attach listeners
});