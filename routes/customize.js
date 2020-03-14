var profile = require('../profile.json');

exports.customize = function(request, response){
	mentorToggle = request.query.discoverable;
    workout = request.query.workout;
    
    if(profile.firstTime == false){
        username = request.query.username;
        profile.name = username;
    }
    profile.mentorToggle = mentorToggle;
    profile.workout = workout;
    profile.firstTime = false;

    response.redirect('profile');
    console.log(profile);
}