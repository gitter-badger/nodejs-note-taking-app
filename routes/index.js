var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    return res.render('greet', {
        from: "amrita",
        to: "amrita"
    })
});

//export this router to use in our index.js
module.exports = router;