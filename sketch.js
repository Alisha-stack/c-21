var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  car = createSprite(200, 200,60,30);
  car.shapeColor = "red";
  car.debug = true;

  wall = createSprite(700, 200,30,60);
  wall.shapeColor = "white";
  wall.debug = true;

  // wall.velocityY=-2;
   car.velocityX=+5;



}

function draw() {
  background(0,0,0);  

  
  bounceOff(car,wall);
bounceOff(movingRect,fixedRect);
//collision();
  drawSprites();
}


