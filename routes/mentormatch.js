var mentorList = require('../buddies.json');
var mentors = search(mentorList);

exports.view = function(request, response){
    var selectedMentor = randomMentor(mentors);
    console.log(selectedMentor);
    response.render('mentormatch', selectedMentor);
}

function randomMentor(mentors) {
    return mentors[Math.floor(Math.random()*mentors.length)];
}

function search(mentorList) {
    var result = [];
    var i = null;
    for (i = 0; mentorList.users.length > i; i += 1) {
        if (mentorList.users[i].mentorToggle === "1") {
            result.push(mentorList.users[i]);
        }
    }

    return result;
}