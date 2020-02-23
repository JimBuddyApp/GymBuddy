var profile = require('../profile.json');
var user = {};

exports.view = function(request, response){
    response.render('signup', {layout: 'loginset.handlebars'});
}

exports.register = function(request, response){
    user = { "firstTime ": true};
    profile.profile.push(user);
    console.log(profile);
    response.redirect('/edit');
}