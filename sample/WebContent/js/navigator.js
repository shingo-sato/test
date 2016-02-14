/**
 * navigator
 */
$(function() {
	$("li").on("click", function(event) {
		$("#main-article").load($(this).find("span").prop("class"));
		$("#main-navigator").animate({
			width : "hide"
		}, "normal");
	});
});