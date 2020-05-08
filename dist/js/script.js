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


// FOR MAP

function init() {
    map = new OpenLayers.Map("basicMap");
    var mapnik = new OpenLayers.Layer.OSM();
    var fromProjection = new OpenLayers.Projection("EPSG:4326"); // Transform from WGS 1984
    var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position = new OpenLayers.LonLat(13.41, 52.52).transform(fromProjection, toProjection);
    var zoom = 15;

    map.addLayer(mapnik);
    map.setCenter(position, zoom);
}