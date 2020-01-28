const http = require('http');

const task1 = http.createServer(handler);

task1.listen(8080, function(){
    console.log('Сервак готов и слушает порт 8080');
});

function handler(request, respons){
    let str = 'You said:\n\n';

    str += request.method + ' ' + request.url + ' ' +
        ' HTTP/' + request.httpVersion + '\n';

    let headerNames = Object.keys(request.headers);

    for(let i = 0; i < headerNames.length; i++){
        str += headerNames[i] + ': ' +
            request.headers[headerNames[i]] + '\n';
    }

    respons.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    respons.end(str);
}