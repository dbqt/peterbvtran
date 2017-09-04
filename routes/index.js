var express = require('express');
var requestify = require('requestify'); ;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //showreel = {imgs:[]};
  requestify.get('https://peterbvtran.herokuapp.com/api/showcase')
  .then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    var showreel = response.getBody();
    res.render('index', {showcase: showreel});
  })
  .fail(function(err) {
		console.log("Error in get home with " + err.getBody()); // Some error code such as, for example, 404
	});
 // res.render('index', {showcase: showreel});
});

router.get('/work', function(req, res, next) {
  //galleryImgs = {imgs:[]};
  requestify.get('https://peterbvtran.herokuapp.com/api/gallery')
  .then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
   var galleryImgs = response.getBody();
    res.render('work', {gallery: galleryImgs});
  })
  .fail(function(err) {
		console.log("Error in get work with " + err.getBody()); // Some error code such as, for example, 404
	});
 //res.render('work', {gallery: galleryImgs});

});

router.get('/blogmaker', function(req, res, next) {
  res.render('blogmaker', { title: 'Peter Binh Vinh Tran' });
});

router.get('/imageadder', function(req, res, next) {

  requestify.get('https://peterbvtran.herokuapp.com/api/gallery')
  .then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
   var galleryImgs = response.getBody();
   res.render('imageadder', { existingGallery: galleryImgs[0] });
  })
  .fail(function(err) {
		console.log("Error in get imageadder with " + err.getBody()); // Some error code such as, for example, 404
	});
  
});

router.get('/blog', function(req, res, next) {

  requestify.get('https://peterbvtran.herokuapp.com/api/blog')
  .then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    var entries = response.getBody();
    // sort by date
    entries.sort(function(a,b) { 
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    });
    entries.reverse();

    res.render('blog', {nb: entries.length, blog: entries});
  })
  .fail(function(err) {
		console.log("Error in get blog with " + err.getBody()); // Some error code such as, for example, 404
	});
  
});


module.exports = router;
