var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./config.json');
var entrees = require('./entrees.json');
// var drinks = require('./drinks.json');
// var sides = require('./sides.json');
// var desserts = require('./desserts.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res){
    res.render('index', {
        "config": config
    });
});

app.get('/:viewname', function(req, res){
    res.render(req.params.viewname, {
        "config": config,
        "entrees": entrees
    });
});

app.listen(3000);