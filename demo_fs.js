/**
 * fs stands for file system, thus it allows us to manipulate the system files on our computer 
 * common uses are: reading files, creating files, deleteing files, updating files, renaming files...etc.
 * 
 */


// var fs= require('fs');
// var http= require('http');

http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);


// will try to append data to a file here, if we try to append data to a file that doesn't exist, it'll be created
// var fs= require('fs');
// fs.appendFile('index.html', '<h1>~#THERE IS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER</h1>', function (err) {
//     if (err) throw err;
//     console.log('DATA ADDED TO FILE!');
// });

// will try to create a new file, if the file name exists, it'll be replaced by a new empty one
// var fs= require('fs');
// fs.open('test.html', 'w', function(err,file){
//     if (err) throw err;
//     console.log('FILE CREATED!')
// })

// here will try to test another function, which is writeFile(), this function is more of a combination of the write and append functions
// it allows us to replace data into a file, and if the file doesn't exist, it gets created and the data is inserted upon
// var fs= require('fs')
// fs.writeFile('testWriteFile.html', "<h1>~#THERE IS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER</h1>", function(err, file){
//     if (err) throw err;
//     console.log("FILE CREATED AND DATA ADDED SUCCESFULLY")
// })

// will try to delete a file here
// var fs= require('fs')
// fs.unlink('test.html', function(err) {
//     if (err) throw err;
//     console.log("FILE REMOVED!");
// })

// renaming files
// var fs= require('fs')
// fs.rename('testWriteFile.html', "someRenamedFile.html", function(err){
//     if (err) throw err;
//     console.log("FILE RENAMED!")
// })