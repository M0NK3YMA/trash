
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftside;
var rightside;
function preload()
{
	
}

function setup() {
	createCanvas(1600,800);

	engine = Engine.create();
	world = engine.world;

ground= new Ground(400,800,1600,20)
leftside= new Ground(1200,800,30,100)
rightside= new Ground(1200,800,30,100)


	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
 ellipse(ball.position.x,ball.position.y,20)
}


function keypressed()
{
if (keyCode===RIGHT_ARROW )
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}



