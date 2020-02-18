const app = require('express')();
const {Nuxt, Builder} = require('nuxt');
const config = require('../nuxt.config');
const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

app.get('/api/users', function(req, res, next){
  res.json({
    title: 'Test title',
    content: 'Test content'
  });
});

builder.build()
  .then(() => {
    // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render);
    // Запустить сервер
    app.listen(8000, ()=>{
      console.log('Server run port 8000');
    });
  });
