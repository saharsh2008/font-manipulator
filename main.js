difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model is loaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        words = document.getElementById("words").value;
        console.log(result)
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist x =" + leftWristX + "Right Wrist x =" + rightWristX + "Difference =" + difference);
        document.getElementById("size").innerHTML = "The font size is: " + difference
        console.log(text)
        console.log(words)
    }
}

function draw() {
    background("#c2e3c1");
    fill("#eb3434");
    stroke("#eb3434");
    text(words, 10, 350)
    textSize(difference)
}