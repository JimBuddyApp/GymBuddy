var buddies = require('../buddies.json');
var available = search(buddies);

exports.view = function(request, response){
    console.log(available);
    response.render('index', buddies);
}

function search(buddies) {
    var result = [];
    var i = null;
    for (i = 0; buddies.users.length > i; i += 1) {
        if (buddies.users[i].isFriend === "0") {
            result.push(buddies.users[i]);
        }
    }

    return result;
}

/* NEED TO FIX THIS FILE: GET IT TO RENDER AVAILABLE INSTEAD OF BUDDIES */