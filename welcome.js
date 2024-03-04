// Step 1: Require the file system module
const fs = require('fs');


// Read data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Data read from welcome.txt:', data);
    }
});