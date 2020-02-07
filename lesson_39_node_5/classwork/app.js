const express = require('express');
const app = express();
const logger = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

const userRout = require('./routes/user.js');

let options = {
    dotfiles: 'ignore',
    maxAge: "1d",
    etag: false
}

let accessLogStream = rfs.createStream('acess.log', {
    interval: '7d',
    path: path.join(__dirname, 'logs')
});

app.set('x-powered-by', false);

app.use(logger('tiny', { stream: accessLogStream }));

app.use(express.static('public', options));




app.use('/admin/', function(req, res, next){
    console.log(req.url);
    console.log(req.headers);
    res.send('Hello Admin2');
});

app.use('/admin/:id', function(req, res, next){
    if(req.params.id === "0"){
        return next('ID admin error');
    }
    res.send('Hello Admin');
});
/*
http://localhost:8080/admin/0
http://localhost:8080/admin/1
*/
app.use(function(req, res, next){
    console.log('!!!');
    res.send('Hello');
});

app.use(function(err, req, res, next){
    console.error(err);
    next(err);
});

app.use(function(err, req, res, next){
    res.status(500);
    res.send('Error');
});

app.use('/user', userRout);



/*app.get('/user', function(req, res, next){
   res.send('User');
   next();
});

app.use(function(req, res, next){
   console.log('!!!');
   res.send('Hello');
});*/

/*
с указанием маршрута
app.use('/user', function(req, res, next){
   res.send('User');
});

app.use('/', function(req, res, next){
   res.send('Hello');
});
*/

/*
без указания маршрута
app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

app.use(function(req, res, next){
    res.send('User');
});*/

app.listen(8080);