var http = require('http');

var server = http.createServer(function(req, res) {

    if(req.url ==='/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is Home page</h1>');
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is About page</h1>');
        res.end();
    }
    else if(req.url==="/contact"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    }

});

server.listen(5052);

console.log("Server listening on port 5052");