// Retrieve account data
var profile = require('../profile.json');

exports.view = function(request, response){
    console.log(profile);
    response.render('profile', profile);
}