let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    let allData = '';

    fs.readFile('header.html', 'utf8', (err, data)=>{
        if(err){
            res.statusCode = 500;
            res.end();
        } else {
            allData+=data;
            fs.readFile('body.html', 'utf8', (err, data)=>{
                if(err){
                    res.statusCode = 500;
                    res.end();
                } else {
                    allData+=data;
                    fs.readFile('footer.html', 'utf8', (err, data)=>{
                        if(err){
                            res.statusCode = 500;
                            res.end();
                        } else {
                            allData+=data;
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            res.end(allData);
                        }
                    });
                }
            });
        }
    });
}).listen(8080);