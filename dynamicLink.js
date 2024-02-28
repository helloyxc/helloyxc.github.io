const button = document.getElementById('dynamic-link');


// Function to fetch the index from cache
function fetchIndexFromCache() {
    return fetchClickCount();
}

// Function to generate the link based on the index
function generateAndOpenLink(index) {
    console.log('Index11:', index);
    var link = document.createElement("a");
    link.href = 'promethean://test2';

    // Set the href attribute based on the index
    if (index % 2 === 0) {
        link.href = 'promethean://test2/Hello/World/This/Is/Additional/Parameters';
    } else {
        link.href = 'promethean://test1/All/The/Best/I/Like/This/Test';
    }
    document.body.appendChild(link)
    link.click();
    // Update the link text to display the index
    button.innerText = `URL: ${link.href}`;
    document.body.removeChild(link);
}

// Function to fetch the click count from local storage
function fetchClickCount() {
    return localStorage.getItem('clickCount') || 0;
}

// Function to save the click count to local storage
function saveClickCount(clickCount) {
    localStorage.setItem('clickCount', clickCount);
}

// Function to increment the click count and update the display
function incrementClickCount(event) {
    event.preventDefault();
    let clickCount = parseInt(fetchClickCount()) + 1;
    generateAndOpenLink(clickCount);
    saveClickCount(clickCount);
    updateClickCountDisplay(clickCount);
}

// Function to update the click count display in the HTML
function updateClickCountDisplay(clickCount) {
    document.getElementById('clickCount').innerText = `Click Count: ${clickCount}`;
}

// Add event listener to the button to increment the click count
button.addEventListener('click', incrementClickCount);

// Update the click count display when the page loads
window.addEventListener('load', () => {
    const clickCount = fetchClickCount();
    updateClickCountDisplay(clickCount);
});

// Save the click count to local storage before the page unloads
window.addEventListener('beforeunload', () => {
    const clickCount = fetchClickCount();
    saveClickCount(clickCount);
});