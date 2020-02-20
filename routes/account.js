var friends = require('../buddies.json');

exports.view = function(request, response){
    var user = search(request.params.userName);
    console.log(user);
    response.render('account', user);

}

function search(userName) {
    var i = null;
    for (i = 0; friends.users.length > i; i += 1) {
        if (friends.users[i].userName === userName) {
            return friends.users[i];
        }
    }

    return item;
}