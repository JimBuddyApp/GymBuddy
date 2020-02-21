var friends = require('../buddies.json');

exports.view = function(request, response){
    var name = request.params.userName;
    var user = search(name);
    console.log(user);
    //response.render('account', user);
    response.render('account');
}

function search(userName) {
    var i = null;
    for (i = 0; friends.users.length > i; i += 1) {
        if (friends.users[i].userName === userName) {
            return friends.users[i];
        }
    }

    return userName;
}