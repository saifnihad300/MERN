var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var myUrl = "https://codeforces.com/contest?problem=C&rating=1200";
    var myUrlObj = url.parse(myUrl, true);

    var myHostName = myUrlObj.hostname;
    var myPathName = myUrlObj.pathname;
    var mySearchName = myUrlObj.search;

     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(myHostName);
     res.write(myPathName);
     res.write(mySearchName);
     res.end();
})

server.listen(5053);
console.log("Server listening on port 5053");