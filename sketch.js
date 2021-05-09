var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200 , 50, 5);
  bullet.shapeColor=("blue");
  
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=bulletspeed;
 
}

function draw() {
  background("white");  
  if(hasCollided(bullet,wall)){
  
bullet.velocityX=0;
var damage=0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="green";
}
if(damage<10){
  wall.shapeColor="red";
}

  }
  bullet.display();
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

