var profile = require('../profile.json');
var user = {};

exports.view = function(request, response){
    response.render('signup', {layout: 'loginset.handlebars'});
}

exports.register = function(request, response){
    var newName = $("input[id='userName']").val();
	console.log(newName);
    user = { "firstTime": true, "name": newName};
    profile.profile.push(user);
    console.log(profile);
    response.redirect('/edit');
}