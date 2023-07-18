const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200); // sets the HTTP status code of the response
    res.end("My first server!"); // writes the HTTP response back to the client who requested it
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});