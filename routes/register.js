var data = require("../profile.json")


exports.register = function(request, response)
{   
    var newName = "Jim Bo"; //get newname from input
    var newMentorStatus = 1; //discoverable as mentor or not
    var newWorkoutType = 2; //1, 2 or 3 for weight, flexibility or cardio
    var imageURL = 'http://lorempixel.com/400/400/people';
	//var newDescription = "CS Professor"; //maybe add this, or other fields
	profile = 
	{
        "firstRegister" : 1,
		"name" : newName,
		"mentorStatus" : newMentorStatus,
		"image" : imageURL
	};
	console.log(profile);
	data.profile.push(newFriend);
	response.redirect('/main');
}