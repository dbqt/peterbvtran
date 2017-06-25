var express = require('express');
var requestify = require('requestify'); ;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peter Binh Vinh Tran' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Peter Binh Vinh Tran' });
});

router.get('/blogmaker', function(req, res, next) {
  res.render('blogmaker', { title: 'Peter Binh Vinh Tran' });
});

router.get('/blog', function(req, res, next) {

  requestify.get('https://peterbvtran.herokuapp.com/api/blog').then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    var entries = response.getBody();
    // sort by date
    entries.sort(function(a,b) { 
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    });
    entries.reverse();

    res.render('blog', {nb: entries.length, blog: entries});
  });
  
});


module.exports = router;
