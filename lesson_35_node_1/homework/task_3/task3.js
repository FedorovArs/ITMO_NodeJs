const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
// const filename = "index.html";
const header = "header.html";
const body = "body.html";
const footer = "footer.html";
http.createServer((request, response) => {// вызов метода создания http сервера
    fs.readFile(filename, 'utf8', (err, data1) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            // console.log(`The file ${filename} is read and sent to the client\n`);
            // response.writeHead(200, {'Content-Type':'text/html'});
            // response.end(data);

            fs.readFile(body, 'utf8', (err, data2) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {

                }

            });
        }




    });
    console.log("Request accepted!");
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});