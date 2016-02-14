/**
 * upload
 */
$(function() {
	addRow();
	$("input[type=file]").on("change", function(event) {
		addRow();
	});

	$("#delete-button").on("click", function() {
		$(".upload-body input[type=checkbox]").each(function(index) {
			if (index != 0 && $(this).prop("checked")) {
				$(this).parents("tr").remove();
			}
		});
		if ($(".upload-body .index-col").length < 2) {
			addRow();
		} else {
			setIndex();
		}
		$("input[type=checkbox]").prop("checked", false);
	});

	$("#all-check").on("click", function() {
		$(".delete-check").prop("checked", $(this).prop("checked"));
	});
});

function setIndex() {
	$(".upload-body .index-col").each(function(index) {
		$(this).find("span").html(index);
	});
}

function addRow() {
	$(".upload-body tr:first-child").clone(true).insertAfter(
			$(".upload-body tr:last-child"));
	setIndex();
}
