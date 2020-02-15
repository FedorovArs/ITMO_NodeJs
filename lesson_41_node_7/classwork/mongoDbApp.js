const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
let app = express();

let option = {
    url: 'mongodb://localhost:27017/db_session',
    mongoOptions: {
        userNewUrlParser: false,
        authSource: 'db_session',
        auth: {
            user: "test",
            password: "test"
        }
    },
    collection: 'db_session',
    ttl: 36000
};

app.use(session({
    secret: 'gubjacfolsgvoj;dv',
    name: 'session',
    cookie:{
        httpOnly: true,
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore(option)
}));

app.get('/', function(req, res, next){
    if(req.session.view){
        req.session.view++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p> Views: ' + req.session.view + '</p>');
        res.write('<p> Expires: ' + req.session.cookie.maxAge + 's</p>');
        res.write('<a href="/out">Out</a>');
        res.end();
    } else {
        req.session.view = 1;
        res.end("Welcome to the new session. ID" + req.session.id);
    }
    console.log(req.session);
});

app.get('/out', function(req, res, next){
    if(req.session){
        req.session.destroy();
    }
    res.redirect('/');
});

app.listen(8080);