var url= require('url');
var http= require('http');
var fs= require('fs');

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q= url.parse(adr, true);
// console.log(q)
// console.log(q.query.month)

http.createServer(function(req, res){
    var q= url.parse(req.url, true);
    var file_name= "."+ q.pathname;
    fs.readFile(file_name, function(err, data){
        if (err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end("404 FILE NOT FOUND!");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);