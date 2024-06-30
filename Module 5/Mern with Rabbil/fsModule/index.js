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
    else if(req.url==="/fDeleteAsync"){
        fs.unlink('deletefile.txt', function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Delete failed");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Delete successfully");
                res.end();
            }
        })
    }
    else if(req.url==="/fDeleteSync"){
        let error = fs.unlinkSync('deletefilesync.txt');
        if(error){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("File Delete failed");
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("File Delete successfully");
            res.end();
        }
    }
    else if(req.url==="/fExistSync") {
        let fileExists = fs.existsSync("home.html");
        if(fileExists){
            res.end("Existing home page");
        }
        else{
            res.end("Not found home page");
        }
    }
    else if(req.url==="/fExistAsync"){
        fs.exists("fileWrite.txt", function(result){
            if(result){
                res.end("Existing text file");
            }
            else {
                res.end("Not found text file");
            }
        })
    }
});

server.listen(8102);
console.log("server listening on 5190");