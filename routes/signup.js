var profile = require('../profile.json');
var user = {};

exports.view = function(request, response){
    response.render('signup', {layout: 'loginset.handlebars'});
}

exports.register = function(request, response){
    var name = request.body.formName;
    console.log(name);

    profile.user.push(name);

	response.send(name);
	response.redirect('/edit');
}