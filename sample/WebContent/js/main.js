/**
 * main
 */
$(function() {
	$("#main-navigator").load("navigator.html");
	$("#main-menu-button").on("click", function(event) {
		$("#main-navigator").animate({
			width : "toggle"
		}, "normal");
		event.stopImmediatePropagation();
		event.preventDefault();
	});
	$("#main-article").on("click", function() {
		$("#main-navigator").animate({
			width : "hide"
		}, "normal");
	});
});