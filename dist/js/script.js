// VIDEO CONTROLS


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("playButton");

// Pause and play the video, and change the button text
function playFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = '<i class="las la-pause la-5x"></i>';
        btn.nextElementSibling.style.opacity = "0";
        btn.parentElement.style.backgroundColor = "rgba(0,0,0,0)";

    } else {
        video.pause();
        btn.innerHTML = '<i class="las la-play la-5x"></i>';
        btn.nextElementSibling.style.opacity = "1";
        btn.parentElement.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
}

// FORM VALIDATION

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["subject"].value;
    var a = document.forms["myForm"]["message"].value;
    if ((x == "") || (y == "") || (z == "") || (a == "")) {
        alert("Please fill out the complete form!");
        return false;
    }
}