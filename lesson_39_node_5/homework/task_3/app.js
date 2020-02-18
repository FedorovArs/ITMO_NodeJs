let express = require('express'); //подключаем модуль express
let app = express();//создаем приложение express
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); /*регистрируем модуль для обработки содержимого тела post запроса в express */

let route = require('./routes/registration.js'); //подключаем файл с роутом

app.use(express.static('public')); /* настраиваем статический сервер, для отдачи контента из папки public */
app.use('/user', route);
app.listen(8080);


