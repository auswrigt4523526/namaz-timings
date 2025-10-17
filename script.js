document.addEventListener('DOMContentLoaded', () => {
    const georgianDateElement = document.getElementById('georgian-date');
    const shareBtn = document.getElementById('share-btn');
    const appContainer = document.getElementById('app-container');

    // 1. Set Georgian Date
    function setGeorgianDate() {
        const today = new Date();
        const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
        georgianDateElement.textContent = today.toLocaleDateString('en-GB', options).replace(/ /g, ', ').replace(',', '', 1);
    }

    // 2. Fetch and display Namaz timings (Auto)
    // This is a placeholder. We will use a real API later.
    function getPrayerTimes() {
        console.log("Fetching prayer times for Hyderabad, India...");
        // In a real app, an API call would be made here.
        // For now, we are using the static times in the HTML.
    }

    // 4. Share as Image
    shareBtn.addEventListener('click', () => {
        // Temporarily hide the button before taking the screenshot
        shareBtn.style.display = 'none';
        html2canvas(document.body, {
            // Set background to match the body's background for a complete image
            backgroundColor: window.getComputedStyle(document.body).backgroundColor
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'namaz-timings.png';
            link.click();
            // Show the button again after the screenshot is taken
            shareBtn.style.display = 'block';
        });
    });

    // Initial setup calls
    setGeorgianDate();
    getPrayerTimes();
});