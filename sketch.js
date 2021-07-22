const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,cannonBall;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cannonBallImage=loadImage("assets/cannonball.png")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(100, 400, 160, 310);
  console.log(tower.x)
  ground = new Ground(0,height-1,width*2,1);
  angle=-PI/4
  cannon = new Cannon(130,160,100,50,angle)
  cannonBall = new CannonBall(cannon.x,cannon.y)
  
}

function draw() {
  background(189);
  imageMode(CENTER)
  image(backgroundImg, windowWidth/2,windowHeight/2, windowWidth, windowHeight);
 
  

  Engine.update(engine);
  ground.display();
  tower.display();
  cannon.display();
  cannonBall.display();
  
 
}
function keyReleased()
{
  if(keyCode===DOWN_ARROW)
  {
    cannonBall.shoot();
  }
}






