var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('auto play is set to '+ video.autoplay);
	video.loop=false;
	console.log('looping is currently set to '+ video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#player1").play();
	console.log('volume is currently set to '+ video.volume)
});

document.querySelector("#pause").addEventListener("click", function() {
    document.querySelector("#player1").pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    var video = document.querySelector("#player1");
    video.playbackRate -= 0.1;
	console.log("The new Speed is "+ video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    var video = document.querySelector("#player1");
    video.playbackRate += 0.1;
	console.log("The new Speed is "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    var video = document.querySelector("#player1");
    video.currentTime += 10;
	console.log("Current video time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	console.log('mute is set to '+ video.muted);
	if (video.muted){
		document.querySelector('#mute').textContent = 'Unmute';
	} else{
		document.querySelector('#mute').textContent = 'Mute';
	}
});

document.querySelector("#slider").addEventListener("input", function() {
    var video = document.querySelector("#player1");
    var volumeDisplay = document.querySelector("#volume");
    video.volume = this.value / 100;
    volumeDisplay.textContent = this.value + "%";
    console.log("Volume set to: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    var video = document.querySelector("#player1");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    var video = document.querySelector("#player1");
    video.classList.remove("oldSchool");
});



















