
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball,ball1,ball2,ball3,ball4;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,100,300,10);

	ball = new Ball(600,250,30);
	ball1 = new Ball(600,250,30);
	ball2 = new Ball(600,250,30);
	ball3 = new Ball(600,250,30);
	ball4 = new Ball(600,250,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
 /* ball1.display();
  ball2.display();
  ball3.display();
  ball4.display(); */

  drawSprites();
}



