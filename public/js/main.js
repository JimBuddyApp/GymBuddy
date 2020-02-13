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
}

function personClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
}

function navFill() {
	if (window.location.pathname=='/main') {
		$('#i-home').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/friends') {
		$('#i-msg').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/profile') {
		$('#i-user').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/settings') {
		$('#i-settings').css("fill", "#FFCD00");
	}
}