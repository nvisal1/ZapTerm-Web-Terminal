const http = require('http');
const terminal = require('web-terminal');

const terminalServer = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

terminalServer.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

terminal(terminalServer);
console.log('Web-terminal accessible at http://127.0.0.1:1337/terminal');

