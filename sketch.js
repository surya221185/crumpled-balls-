
const MyEngine = Matter.Engine;
const MyWorld = Matter.World;
const MyBodies = Matter.Bodies;
const MyBody = Matter.Body;

var ball1;
var ground;
var lSide,rSide,bSide;

function preload()
{
	
}

function setup() {
	createCanvas(500, 400);
  rectMode(CENTER);

	engine = MyEngine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1=new Ball(100,200,25);

	ground=new Ground(250,390,500,20);

  lSide=new Basket(300,340,20,80);
  rSide=new Basket(450,340,20,80);
  bSide=new Basket(375,370,130,20);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  MyEngine.update(engine);
  background(0);

  ball1.display();
  ground.dikhao();
  lSide.dikhao();
  rSide.dikhao();
  bSide.dikhao();
  drawSprites();

  KeyPressed();
 
}
function KeyPressed(){
  if (keyWentDown("UP_ARROW")){
    Matter.Body.applyForce(ball1.ball,ball1.ball.position, { x:12, y:-30 });
  }
}