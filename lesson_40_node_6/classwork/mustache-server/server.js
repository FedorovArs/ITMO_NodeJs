const express = require('express');
const mustacheExpress = require('mustache-express');
let app = express();

app.set('views', __dirname + '/views');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');

app.get('/', function(req, res, next){
    res.render('index', { title: 'Первый опыт с express и mustache' });
});

app.listen(8080);