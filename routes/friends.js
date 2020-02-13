// Retrieve account data
var friends = require('../friends.json');

exports.view = function(request, response){
    console.log(friends);
    response.render('friends', friends);
}