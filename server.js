/**
 * In this file i´ve created a server web with node.js
 * You can see the result if you put on your browser localhost:8000
 * Author: Tarek Cruz
 * IMPORTANT: You need to 'openurl' node package --> npm install openurl, 
 * if you dont wanna install comnent line 24
 */
var http = require('http'); // Charge the standar module http which contain the function to create the server


const host = 'localhost'; // constant defined by host (private direction)
const port = 8000; // constant defined by port (to our IP)

var server = http.createServer((function (request, response) { // we create a new object of server
	response.writeHead(200, // defined the head of contain
		{ "Content-Type": "text/html" });
	response.end("<html><body><h1> Hello world </h1></body></html>"); // web server output, here we send the string to response

}));

server.listen(port); // function listener that receive a parametrer (port)
console.log(`El servidor esta levantado en http://${host}:${port}`); // console output

require('openurl').open(`http://${host}:${port}`)
