var profile = require('../profile.json');

exports.view = function(request, response){
    response.render('signup', {layout: 'loginset.handlebars'});
}