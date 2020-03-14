var profile = require('../profile.json');

exports.register = function(request, response){
	name = request.query.username;
	password = request.query.password;
	defaultImageURL = '../images/default.png';
    profile.firstTime = true;
	profile.name = name;
	profile.password = password;
	profile.imageURL = defaultImageURL;
	console.log(profile);
	response.redirect('edit');
}