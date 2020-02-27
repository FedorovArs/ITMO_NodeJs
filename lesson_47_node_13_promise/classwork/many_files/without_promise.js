let http = require('http');
let fs = require('fs');

let tasks = ['header.html', 'body.html', 'body2.html', 'footer.html'];

http.createServer(function(req, res){
    let allData = '';

    function iterator(i){
        if(i === tasks.length){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(allData);
        } else {
            fs.readFile(tasks[i], 'utf8', (err, data)=>{
                if(err){
                    res.statusCode = 500;
                    res.end();
                } else {
                    allData += data;
                    iterator(++i);
                }
            });
        }
    }
    iterator(0);
}).listen(8080);