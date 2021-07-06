var runner, runner_running
var road, roadImage
var wall_left, wall_right


function preload(){
  //pre-load images
 runner_running = loadAnimation("Runner-1.png", "Runner-1.png")

 roadImage = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);

  //create sprites here
 runner = createSprite(200,200,20,50)
 runner.addAnimation("running", runner_running)
 runner.scale = 0.5

  //road
  road = createSprite(200,200,400,400)
  road.addImage("road", roadImage)
  road.velocityY= 2
  road.scale= 1.2
  
 //road walls
 wall_left = createSprite(25,200,50,400)
 wall_left.visible = false;
 wall_right= createSprite(375,200,50,400)
 wall_right.visible = false;



}

function draw() {
  background("white");
 
  road.velocityY= 35
  
 if(road.y > 400){
   road.y = height/2;
 }

 runner.x = mouseX

runner.collide(wall_right)
runner.collide(wall_left)


  drawSprites()
}
