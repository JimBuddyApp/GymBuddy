var profile = require('../profile.json');

exports.customize = function(request, response){
	mentorToggle = request.query.discoverable;
	workout = request.query.workout;
    username = request.query.username;

    profile.mentorToggle = mentorToggle;
    profile.workout = workout;
    profile.name = username;
    profile.firstTime = false;

    response.redirect('profile');
    console.log(profile);
}