var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {

    if(req.url === '/home') {
        let data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    }
    else if(req.url==="/about"){
        let data = fs.readFileSync('About.html', 'utf8');
        res.end(data);
    }
    else if(req.url==="/contact"){
        let data = fs.readFileSync('Contact.html', 'utf8');
        res.end(data);
    }
    else if(req.url==="/terms"){
        let data = fs.readFileSync('Terms.html', 'utf8');
        res.end(data);
    }
});

server.listen(8106);
console.log("Server listening on port 8106");