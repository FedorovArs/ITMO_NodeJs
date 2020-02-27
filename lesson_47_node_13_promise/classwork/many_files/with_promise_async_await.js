let http = require('http');
let fs = require('fs');
//let fsPromises = fs.promises;

let tasks = ['header.html', 'body.html', 'body2.html', 'footer.html'];

http.createServer(function(req, res){
    readFiles().then((allData)=>{
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

async function readFiles(){
    let allData = '';

    try {

        for(let i = 0; i < tasks.length; i++){
            allData += await promiseReadFile(tasks[i]);
        }

    } catch (err) {
        console.log(err);
        throw err;
    }

    return allData;
}

function promiseReadFile(filename){
    return fsPromises.readFile(filename, { encoding: 'utf8', flag: 'r' })
}