let http = require('http');
let fs = require('fs');

let tasks = ['header.html', 'body.html', 'body2.html', 'footer.html'];

http.createServer(function(req, res){
    let allData = '';

    let promise = Promise.resolve('');

    for(let i = 0; i < tasks.length; i++){
        promise = promise.then((data)=>{
            allData += data;
            return promiseReadFile(tasks[i]);
        });
    }

    /*let promise = tasks.reduce((prev, curr)=>{
        return prev.then((data)=>{
            allData += data;
            return promiseReadFile(curr);
        });
    }, Promise.resolve(''));*/

    promise.then((data)=>{
        allData += data;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(allData);
    }).catch((err)=>{
        console.log(err);
        res.statusCode = 500;
        res.end();
    });
}).listen(8080);

function promiseReadFile(filename){
    return new Promise((resolve, reject)=>{
        fs.readFile(filename, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}