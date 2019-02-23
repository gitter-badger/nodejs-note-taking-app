var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/get/:name', function(req, res){
    res.send('Hello ' + req.params.name + ' !');
 });




//export this router to use in our index.js
module.exports = router;