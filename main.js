function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  pose_net = ml5.poseNet( video,model_loaded);
  pose_net.on('pose', gotpose);
}

x= 0;
y= 0;

function model_loaded(){
  console.log("Loaded");
}

function draw(){
  image(video, 0,0,300,300);
  image(lip, x, y, 35,40);
 }

function gotpose(result){
  
  if (result.length > 0){
    x = result[0].pose.nose.x - 18;
    y = result[0].pose.nose.y + 3;
  console.log(result);
  console.log("nose x = " + x );
  console.log("nose y = " + y );
  }
}

function preload(){
lip = loadImage("https://i.postimg.cc/rphwD0R5/lip.png");
}


function Snapshot(){
    save("My_pic.png");
}