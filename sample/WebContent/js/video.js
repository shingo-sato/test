$(function() {

	navigator.getUserMedia = (navigator.getUserMedia
			|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	var video = document.getElementById("stream-area");
	var localStream = null;
	navigator.getUserMedia({
		video : true,
		audio : true
	}, function(stream) { // for success case
		console.log(stream);
		video.src = window.URL.createObjectURL(stream);
	}, function(err) { // for error case
		console.log(err);
	});
});