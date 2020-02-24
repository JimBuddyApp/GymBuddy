var data = require("../profile.json")


exports.register = function(request, response)
{   
	var newName = $("#userName").val();
	console.log(newName);
	var newDescription = "It's You!";
	newUser =
	{
		"firstTime" : true
		"name" : newName,
		"description" : newDescription,
		"image" : 'http://lorempixel.com/400/400/people'
	};
	console.log(newUser);
	data.profile.push(newUser);
	response.redirect('/edit');
}