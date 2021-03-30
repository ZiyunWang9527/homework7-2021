var video= document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
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
	video.currentTime += 15;
});
var buttonText = document.querySelector("#mute");
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		buttonText.innerHTML = "Mute";
	}else{
		video.muted = true;
		buttonText.innerHTML = "Unmute";
	}
});

var slider = document.querySelector("#slider");
document.querySelector("#volume").innerHTML = slider.value;
slider.oninput = function() {
	document.querySelector("#volume").innerHTML = this.value;
	video.volume = this.value / 100;
}

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("oldschool Video");
	video.className = "oldschool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("original Video");
	video.className = "video";
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });video.classList.add("oldschool");

