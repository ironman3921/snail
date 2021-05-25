
var snail, snail_img;
var tomato, tomato_img;
var ground, ground_img;

function preload(){
 ground_img = loadImage("ground.png");
 snail_img = loadAnimation("snail.png");
 
}

function setup(){
 createCanvas(600,200);
 ground = createSprite(300,-16,1200,60);
 ground.addImage("ground",ground_img);
 ground.scale = 0.4;
 ground.velocityX = -2;
 snail = createSprite(50,98,50,50);
 snail.addAnimation("snail",snail_img);
 snail.scale = 0.06;

}


function draw(){
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  snail.x = mouseX;
  snail.y = mouseY;
  drawSprites();
  
}
