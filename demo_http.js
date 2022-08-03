/* testing with the http module */

var server= require('http'); /* this module allows Node to send data over the hypertext transfer protocol */
var dt= require('./datetime'); /* importing a module we created */
var url= require('url'); /* the URL module is mainly "obv" used to process URLs for data extraction e.g. */

server.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("GO READ THE LAST QUESTION BY ASIMON YOU IGNORANT FUCKS D: \n");
    /* res.write(req.url); this is the part of the URL (that the user used to access the server) following the domain name */
    let dt= url.parse(req.url, true).query;
    console.log(dt);
    res.write(dt.month + "......"+ dt.year);
    res.end();
}).listen(8080)

