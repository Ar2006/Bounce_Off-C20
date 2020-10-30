var fixedRect, movingRect

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(200,200,150,100);
  movingRect.shapeColor = "Red"
  movingRect.velocityX = 5
  fixedRect=createSprite(400, 200, 100, 150);
  fixedRect.shapeColor = "Red"
  fixedRect.velocityX = -5
}

function draw() {
  background(255,255,255);
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
      
    }
  else {
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
      movingRect.velocityX = movingRect.velocityX*-1;
      fixedRect.velocityX = fixedRect.velocityX*-1;
    }
  if( movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      movingRect.velocityY = movingRect.velocityY*-1;
      fixedRect.velocityY = fixedRect.velocityY*-1;
    }
  drawSprites();
}