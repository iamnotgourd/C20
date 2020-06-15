function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,100,30,50)
  movingRect.shapeColor = "red";
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
   fixedRect.shapeColor = "yellow";
   movingRect.shapeColor = "yellow";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
   
  drawSprites();
}