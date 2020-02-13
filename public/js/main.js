'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
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