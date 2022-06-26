status = "";
text_input = "";
video = "";

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 290);
    video.hide();
}

function preload(){
}

function setup(){
    canvas = createCanvas(450, 300);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("object").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}