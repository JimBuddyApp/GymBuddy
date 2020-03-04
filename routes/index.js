var buddies = require('../buddies.json');
var available = search(buddies);

exports.view = function(request, response){
    buddies['viewAlt'] = false;
    console.log("available: " + available);
    console.log()
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

exports.viewAlt = function(request, response){
    buddies['viewAlt'] = true;
    console.log(buddies);
    response.render('index', buddies);
}

exports.viewSortMentors = function(request, response){
    response.render('sortMentors', {layout: 'loginset.handlebars', buddies: buddies.users});
}

exports.viewSortBuddies = function(request, response){
    response.render('sortBuddies', {layout: 'loginset.handlebars', buddies: buddies.users});
}
/* NEED TO FIX THIS FILE: GET IT TO RENDER AVAILABLE INSTEAD OF BUDDIES */