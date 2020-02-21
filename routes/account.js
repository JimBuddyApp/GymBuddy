var buddies = require('../buddies.json');
var friends = require('../friends.json');
var user;

exports.view = function(request, response){
    var name = request.params.userName;
    user = search(name);
    console.log(user);
    response.render('account', user);
}

exports.addfriend = function (request, response){
    user["isFriend"] = true;
    friends.friends.push(user);
	response.redirect('/friends');
}

function search(userName) {
    var i = null;
    for (i = 0; buddies.users.length > i; i += 1) {
        if (buddies.users[i].userName === userName) {
            return buddies.users[i];
        }
    }

    return userName;
}