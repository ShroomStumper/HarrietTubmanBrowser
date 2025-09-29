function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const contentFrame = document.getElementById('contentFrame');
    const initialMessage = document.getElementById('initialMessage');
    let url = urlInput.value;

    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    if (url) {
        if (!initialMessage.classList.contains('hidden')) {
            initialMessage.classList.add('hidden');
        }

        contentFrame.src = url;
        contentFrame.classList.remove('visible');

        contentFrame.onload = () => {
            contentFrame.classList.add('visible');
            contentFrame.onload = null; // Clean up the event listener
        };
    }
}

function navigateHistory(direction) {
    if (direction === -1) {
        history.back();
    } else if (direction === 1) {
        history.forward();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial message fade-in effect on page load
    const initialMessage = document.getElementById('initialMessage');
    initialMessage.style.opacity = '1';

    // Capture enter key press on the input field
    document.getElementById('urlForm').addEventListener('submit', (event) => {
        event.preventDefault();
        loadUrl();
    });
});
