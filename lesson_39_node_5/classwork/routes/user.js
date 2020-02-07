const express = require('express');
const router = express.Router();

//http://localhost:8080/user/hello
router.get('/hello', function(req, res, next){
    res.send('Hello user');
});
//http://localhost:8080/user/about
router.get('/about', function(req, res, next){
    res.send('Hello about');
});

module.exports = router;