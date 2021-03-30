var video= document.querySelector("#player1");
var slider = document.querySelector("#slider");
var buttonText = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 >= video.duration){
		video.load();
	}else{
		video.currentTime += 15;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		buttonText.innerHTML = "Mute";
	}else{
		video.muted = true;
		buttonText.innerHTML = "Unmute";
	}
});


slider.oninput = function() {
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;
}

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("oldSchool Video");
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("original Video");
	video.className = "video";
});
