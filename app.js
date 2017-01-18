
var exp = require('express');
var handlers = require('./route/routes.js');
var app = exp();

app.set('view engine', 'ejs');

app.get('/',handlers.homeFn);

app.get('/:city',handlers.cityFn);

app.use(exp.static('_dirname' + 'public'));

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req,res){

     console.log("catch the action at http://localhost:" + port);
});
