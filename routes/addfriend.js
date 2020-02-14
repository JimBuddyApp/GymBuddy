var data = require("../friends.json")


exports.addFriend = function(request, response)
{   
	var newName = "John Smith";
	var newDescription = "CS Professor";
	newFriend = 
	{
		"name" : newName,
		"description" : newDescription,
		"image" : 'http://lorempixel.com/400/400/people'
	};
	console.log(newFriend);
	data.friends.push(newFriend);
	response.redirect('/friends');
}