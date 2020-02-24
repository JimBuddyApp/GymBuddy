var profile = require('../profile.json');

exports.view = function(request, response){
    response.render('signup', {layout: 'loginset.handlebars'});
}

exports.register = function(request, response){
    console.log("register export used");
    var name = request.query.name;
    user = {
        "name": name
    };
    console.log(user);
	// response.send(name);
    response.render('edit', profile);
    profile.profile.push(user);
}