const express = require('express');
let app = express();

app.use(function(req, res, next){
    let cookie = req.headers.cookie;
    if(!cookie){
        res.writeHead(200, {
            'Set-Cookie': 'id=123; domain=localhost; path=/; max-age=60'
        });
        res.end('Hello!!');
    } else {
        console.log(cookie);
        res.end('Exist cookie!!');
    }
});

app.listen(8080);