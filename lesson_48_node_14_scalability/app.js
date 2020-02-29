const http = require('http');
const pid = process.pid;
var i = 0;
http.createServer((req, res) => {
    for (let i = 1e7; i>0; i--) {}
    console.log(`Handling request from ${pid} numder ${i++}`);
    res.end(`Hello from ${pid}\n`);

}).listen(8080, () => {
    console.log(`Started ${pid}`);
});

process.on('message', (str)=>{
    console.log(str);
});

setTimeout(() => {
    throw new Error('Ooops');
}, Math.ceil(Math.random() * 3) * 1000);