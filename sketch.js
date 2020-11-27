var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  witdh=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=colour(80,80,80);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
     
   bullet.velocityX=0
     
     var deformation = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
     
     if(damage > 10){
        wall.shapeColor=colour(255,0,0);
     }
     if(damage < 10){
        wall.shapeColor=colour(0,255,0);
     }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){

   bulletRightEdge=lbullet.x+lbullet.wight;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
      return true
   }
   return false
}
