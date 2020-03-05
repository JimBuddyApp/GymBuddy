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
    console.log("friends.json contents: " + friends.friends);
	response.render('account', user);
}

exports.removefriend = function(request, response){
    user["isFriend"] = false;
    for (var i = 0; i < friends.friends.length; i++) {
        if (friends.friends[i].userName == user.userName) {
            friends.friends.splice(i, 1);
            break;
        }
    }
    response.render('account', user);
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