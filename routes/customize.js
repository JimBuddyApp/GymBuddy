var profile = require('../profile.json');

exports.customize = function(request, response){
	mentorToggle = request.query.discoverable;
	workout = request.query.workout;
    image = "images/stock/dp.jpg";
    
    profile.mentorToggle = mentorToggle;
    profile.workout = workout;
    profile.imageURL = image;
    response.redirect('profile');
    console.log(profile);
}