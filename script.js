//your JS code here. If required.

const currentUrl = window.location.href;

const n = currentUrl.match(/[a-zA-Z]/g);

alert("The length of the URL is : "+ n.length);




