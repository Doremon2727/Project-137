status = "";
results = "";

function setup() {
    canvas = createCanvas(480,380);
    canvas.position ();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw() {
    image(video, 0, 0 , 480, 380);

    
    if(status !="") {
        for(i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence*100 );
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults() {
    function gotResults(error, results) {
        if(error){
            console.log(error);
        }
        console.log(results);
        objects = results;
    }
}
}