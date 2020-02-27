'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// Get height of viewport inner window and set CSS variable --vh
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	navFill();
	//check();
})

/** 
function check() {
	var result = JSON.parse(profile)
		if(result.workout == 'Weight'){
		document.getElementById("radio1").checked = true;
		}
		else if(result.workout == 'Flexibility'){
			document.getElementById("radio2").checked = true;
		}
		else if(result.workout == 'Cardio'){
			document.getElementById("radio3").checked = true;
		}
}	
*/

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	//initRegister();
	$(".btn-person-click").click(personClick);
	$('.btn-mentor-click').click(mentorAnimate);
	$('.btn-mentor-close').click(mentorClose);
	$(".btn-logout-click").click(logOut);
}

function logOut(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
	window.location = '/';
}

function personClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
}

function mentorAnimate() {
	$(".btn-mentor").animate({
		borderRadius: '0px',
		bottom: '0px',
		right: '0px',
		height: '100%', 
		width: '100%',
		opacity: '0',
		zIndex: '5'
	}),

	$(".btn-mentor-secondary").animate({
		borderRadius: '0px',
		bottom: '0px',
		right: '0px',
		height: '100%', 
		width: '100%',
		opacity: '100',
		zIndex: '10'
	}),

	$(".btn-mentor-close").animate({
		opacity: '100',
		zIndex: '15'
	})
}

function mentorClose() {
	$(".btn-mentor-secondary").animate({
		opacity: '0',
		borderRadius: '50%',
		height: '40px',
		width: '40px',
		bottom: '25px',
		right: '25px',
		zIndex: '5'
	}),

	$(".btn-mentor").animate({
		opacity: '100',
		borderRadius: '50%',
		height: '40px',
		width: '40px',
		bottom: '25px',
		right: '25px',
		zIndex: '10'
	}),

	$(".btn-mentor-close").animate({
		opacity: '0',
		zIndex: '5'
	})
}

function navFill() {
	if (window.location.pathname=='/main' || window.location.pathname=='/mentormatch' || window.location.pathname=='/viewAlt') {
		$('#i-home').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/friends') {
		$('#i-star').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/profile' || window.location.pathname=='/edit') {
		$('#i-user').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/settings') {
		$('#i-settings').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/accounts') {
		$('#i-user').css("fill", "#FFCD00");
	}
}