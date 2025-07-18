//your JS code here. If required.

const url = window.location.href;
const letters = url.match(/[a-zA-Z0-9\W]/g);

alert("The length of the URL is : " +letters.length);




