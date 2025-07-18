//your JS code here. If required.

const url = window.location.href; // Get the full URL
const lettersOnly = url.match(/[a-zA-Z]/g); // Regex to match only letters
const letterCount = lettersOnly ? lettersOnly.length : 0;

alert(`The length of the URL is: ${letterCount}`);




