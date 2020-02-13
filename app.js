/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override');
var session = require('express-session');
var errorHandler = require('errorhandler');

// Require routes here
var index = require('./routes/index');
var friends = require('./routes/friends');

var app = express();

// All environments
app.set('port', process.env.PORT || 3000);

// View engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/friends', friends.view);


app.use(express.static(path.join(__dirname, 'public')));
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})