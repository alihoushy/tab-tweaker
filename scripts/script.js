
// Change tab title
function changeTitle(newTitle) {

    // Get all title elements
    let titles = document.getElementsByTagName('title');

    // If no title elements exist, create one
    if(!titles.length) {
        let title = document.createElement('title');
        document.head.appendChild(title);
    }

    // Set new title  
    document.title = newTitle;

}

// Change tab favicon
function changeFavicon(url) {

    // First try to find existing favicon links
    let links = document.querySelectorAll("link[rel*='icon']");

    if (links.length) { 
        // If links exist, change them
        links.forEach(link => {
        link.href = url; 
        });
    } else {
        // If no links, create new link element
        let link = document.createElement('link'); 
        link.rel = 'icon';
        link.href = url;

        // Get first element in head to insert before    
        let ref = document.querySelector('head>*:first-child') || document.querySelector('html>*:first-child');
        
        // Insert new link  
        ref.parentNode.insertBefore(link, ref);
    }

}

// Update page tab
function updatePage() {

    const newFavicon = chrome.runtime.getURL('../icons/icon128.png');
    const newTitle = '‌';

    changeFavicon(newFavicon);

    changeTitle(newTitle);

}

// Usage
updatePage();
