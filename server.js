// Importing required modules
const http = require('http');

// Define the content to be sent as a response
const responseContent = '<h1>Hello Node!!!!</h1>\n';

// Create an HTTP server
const server = http.createServer((request, response) => {
    // Set the response header to indicate HTML content
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the response content
    response.end(responseContent);
}).listen(3000);


console.log(`Server running at http://localhost:3000/`);

