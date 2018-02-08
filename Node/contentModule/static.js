module.exports = function () {
    const http = require('http');
    const fs = require('fs');
    server = http.createServer(function (request, response){
        if (request.url === '/stylesheets/style.css') {
            fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
                response.writeHead(200, { 'Content-type': 'text/css' });
                response.write(contents);
                response.end();
            })
        } else {
            response.end('File not found!!')
        }
    })
}



