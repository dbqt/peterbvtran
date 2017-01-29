var express = require('express');
var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
/*
app.get('/', function(request, response) {
  response.render('pages/index');
});
*/
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


