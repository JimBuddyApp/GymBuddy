// Retrieve account data
var buddies = require('../buddies.json');

exports.view = function(request, response){
    console.log(buddies);
    response.render('index', buddies);
}