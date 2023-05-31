noseX = 0;
noseY = 0;
function preload() {
    moustache = loadImage('https://i.postimg.cc/FKKmm0mV/handlebar-moustache-cartoon-clip-art-cute-mustache-cliparts.jpg');
}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialised')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
image(video, 0, 0, 400, 300);
fill(255,0,0);
stroke(255,0,0);
image(moustache, noseX-40, noseY-15, 80, 30);
}
function filter_save() {
    save('myFilterImage.png');
}