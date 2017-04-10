var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var db = require('../lib/db.js')
var mongoose = require( 'mongoose' );
var Blog = mongoose.model( 'Blog' );
var DetailedImage = mongoose.model('DetailedImage');

router.use(bodyParser.json()); // for parsing application/json

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peter Binh Vinh Tran' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Peter Binh Vinh Tran' });
});

router.get('/blog', function(req, res, next){
  // get all blogs
  Blog.find(function(err, data) {
    if(err){
      res.status(500).send(err);
      console.log(err);
    } else {
      res.json(data);
    }
  })
});

router.post('/blog', function(req, res, next) {

  if(req.body.code != "a"){
    res.sendStatus(401);
    return;
  }

  // get all imgs
  var allImgs = [];
  req.body.imgs.forEach(function(element) {
    allImgs.push({imgUrl : element.imgUrl, description: element.description});
  }, this);

  //create new blog
  new Blog({
    id : req.body.id,
    title : req.body.title,
    date : req.body.date,
    text : req.body.text,
    imgs : allImgs
  }).save(function(err){
    if(err) {
      res.send(err); 
      console.log(err);
    }
    else { 
      res.sendStatus(201);
    }
  });

});

module.exports = router;
