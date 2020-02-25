var profile = require('../profile.json');

exports.register = function(request, response){
	name = request.query.name;
	email = request.query.email;
	password = request.query.password;
    user = {
		"name": name,
		"email": email,
		"password": password
	};
	console.log(user);
	profile.profile.push(user);
	response.redirect('edit');
}