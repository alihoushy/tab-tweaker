// // // // // // // // // // 
// change tab tile

document.title = '‌'

// // // // // // // // // // 
// change tab favicon

// create a new HTML link element
let link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = 'https://em-content.zobj.net/source/apple/354/locked_1f512.png';

// remove any existing favicon
let existingLink = document.querySelector('link[rel="icon"]');
if (existingLink)
     document.head.removeChild(existingLink);

// add the new favicon
document.head.appendChild(link);

// // // // // // // // // // 
