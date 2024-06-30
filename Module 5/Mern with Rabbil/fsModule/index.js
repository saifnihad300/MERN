var fs = require('fs');
var http = require('http');

var server =  http.createServer(function (req, res){

    if(req.url === '/'){
        fs.readFile('home.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    else if(req.url==="/sync"){
            let mydata= fs.readFileSync('home.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(mydata);
            res.end();
    }
    else if(req.url==="/fileWrite"){
        fs.writeFile('write.txt', 'keep calm and happiness', function(error, data){
            if(error){
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write("File write failed");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Write Successfully");
                res.end();
            }
        })
    }
    else if(req.url==="/fwSync"){
        fs.writeFileSync('fileWrite.txt', 'never lose hope, cause allah is always by my side.');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("File Write successfully");
        res.end();
    }
    else if(req.url==="/fRename"){
        fs.rename('rename.txt', 'write.txt', function(error, data){
            if(error){
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write("File Rename failed");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Rename successfully");
                res.end();
            }
        });
    }
    else if(req.url==="/fRenameSync"){
        fs.renameSync('renameasync.txt', 'write.txt');
        res.write('File Rename successfully');
        res.end();
    }
});

server.listen(5101);
console.log("server listening on 5050");