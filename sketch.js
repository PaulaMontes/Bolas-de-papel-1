
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var right;
var left;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	ball = Bodies.circle(200,300,10,ball_options);
	World.add(world, ball);

	groundObj = new Ground(225,800,600,20);
  	right = new Ground(800,600,20,120);
  	left = new Ground(850,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode (RADIUS);

  background(0);
  
  groundObj.display();
  right.display();
  left.display();

  keyPressed();
  ellipse(ball.position.x, ball.position.y, 10);

  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce (ball, {x:0, y:0}, {x:0.05, y:-0.05})
	}
}

