var profile = require('../profile.json');

exports.register = function(request, response){
	name = request.query.name;
	email = request.query.email;
	password = request.query.password;
    profile.firstTime = true;
	profile.name = name;
	profile.email = email;
	profile.password = password;
	console.log(profile);
	response.redirect('edit');
}