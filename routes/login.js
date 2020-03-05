var data = require('../friends.json');

exports.view = function(request, response){
    data.friends = [];
    console.log("friends.json contents: " + data.friends);
    response.render('login', {layout: 'loginset.handlebars'});
}