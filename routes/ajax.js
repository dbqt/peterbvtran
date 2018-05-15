var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var db = require('../lib/db.js')
var mongoose = require( 'mongoose' );
var Blog = mongoose.model( 'Blog' );
var Showcase = mongoose.model( 'Showcase' );
var ShowcaseImage = mongoose.model( 'ShowcaseImage' );
var Gallery = mongoose.model( 'Gallery' );
var GalleryAlbum = mongoose.model( 'GalleryAlbum' );
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
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  })
});

router.get('/gallery', function(req, res, next){
  // get all gallery
  GalleryAlbum.find(function(err, data) {
    
    if(err){
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  })

});

router.get('/gallery/:index', function(req, res, next){
  // get all gallery
  GalleryAlbum.find(function(err, data) {
    
    if(err){
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.json(data[index]);
    }
  })

});

router.get('/showcase', function(req, res, next){
  // get all imgs
  ShowcaseImage.find(function(err, data) {
    
    if(err){
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  })
});

router.post('/blog', function(req, res, next) {

  console.log("code is " + req.body.code);
  // hardcoded password...
  if(req.body.code != "4545645"){
    res.sendStatus(401);
    return;
  }

  // get all imgs
  var allImgs = [];
  req.body.imgs.forEach(function(element) {
    if(element.imgUrl != "") {
      allImgs.push({imgUrl : element.imgUrl, description: element.description});
    }
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
      console.log(err);
      res.send(err); 
    }
    else { 
      res.sendStatus(201);
    }
  });

});

router.post('/showcase', function(req, res, next) {
  
    console.log("code is " + req.body.code);
    // hardcoded password...
    if(req.body.code != "4545645"){
      res.sendStatus(401);
      return;
    }

    //create new showcase image
    new ShowcaseImage ({
      imgUrl : req.body.imgUrl
    }).save(function(err){
      if(err) {
        console.log(err);
        res.send(err); 
      }
      else { 
        res.sendStatus(201);
      }
    });
  
  });

  router.post('/gallery', function(req, res, next) {
    
      console.log("code is " + req.body.code);
      // hardcoded password...
      if(req.body.code != "4545645"){
        res.sendStatus(401);
        return;
      }

      // get all imgs
      var allImgs = [];
      req.body.imgs.forEach(function(element) {
        if(element.imgUrl != "") {
          allImgs.push({imgUrl : element.imgUrl, description: element.description});
        }
      }, this);
  
      //create new showcase image
      new GalleryAlbum ({
        name : req.body.name,
        description : req.body.description,
        coverUrl : req.body.imgUrl,
        imgs : allImgs
      }).save(function(err){
        if(err) {
          console.log(err);
          res.send(err); 
        }
        else { 
          res.sendStatus(201);
        }
      });
    
    });

function initGallery() {

  var img = [];
  img.push({imgUrl : "", description: ""});

  new Gallery({
    imgs : img
  }).save(function(err){
    if(err) {
      console.log(err);
    }
  });
}

function initAlbum() {
  
    var img = [];
    img.push({imgUrl : "", description: ""});
  
    new GalleryAlbum({
      name : "name",
      coverUrl : "",
      imgs : img
    }).save(function(err){
      if(err) {
        console.log(err);
      }
    });
  }

function initShowcase() {

  var img = [];
  img.push({imgUrl : "", description: ""});

  new Showcase({
    imgs : img
  }).save(function(err){
    if(err) {
      console.log(err);
    }
  });
}

module.exports = router;
