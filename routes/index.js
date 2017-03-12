var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peter Binh Vinh Tran' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Peter Binh Vinh Tran' });
});

router.get('/blog', function(req, res, next) {

/*

  http.get({}, function(resp){
    resp.on('data', function(chunk){
      //do something with chunk
      res.render('blog');
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
*/
  
});

module.exports = router;
