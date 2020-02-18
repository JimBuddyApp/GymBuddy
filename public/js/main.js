'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// Get height of viewport inner window and set CSS variable --vh
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	navFill();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".btn-person-click").click(personClick);
	$(".btn-search-click").click(mentorClick);
	$('.btn-mentor-click').click(mentorAnimate);
}

function personClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
	window.location = '/accounts';
}

function mentorClick(e) {
	e.preventDefault();
	window.location = '/search';
}

function mentorAnimate() {
	$(".btn-mentor").animate({
		borderRadius: '0px',
		bottom: '0px',
		right: '0px',
		height: '100%', 
		width: '100%',


	});
}

function navFill() {
	if (window.location.pathname=='/main' || window.location.pathname=='/mentors') {
		$('#i-home').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/friends') {
		$('#i-msg').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/profile') {
		$('#i-user').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/settings') {
		$('#i-settings').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/accounts') {
		$('#i-user').css("fill", "#FFCD00");
	}
}