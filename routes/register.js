var profile = require('../profile.json');

exports.register = function(request, response){
    console.log("register export used");
    
	name = request.query.name;
	email = request.query.email;
	password = request.query.password;
    user = {
		"name": name,
		"email": email,
		"password": password
    };
	console.log(user);
	response.render('edit', user);
    profile.profile.push(user);
}