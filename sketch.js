var  bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  bullet = createSprite(50,200,50,20);
  thickness = random(22,83);
  wall = createSprite(1500,150,thickness,height/2)
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}
console.log(weight);
function draw() {
  background(255,255,255);  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var deformation = 0.5* weight* speed* speed/(thickness* thickness* thickness);
    if(deformation>10){
      wall.shapeColor = color(255,0,0);
    }      
    if(deformation<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  fill("black");
  stroke("black")
  textSize(20);
  text("Speed: "+speed,50,20);
  text("Thickness: "+ thickness,50,75);
  text("Deformation: " + deformation,50,130);
  drawSprites();
  
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}