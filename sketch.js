
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, height/4 , width/7 ,20)

	bobDiameter = 40

	px = width/2

	py = height/4 + 500

	bobObject1 = new Bob(px-bobDiameter*2, py, bobDiameter)
	bobObject2 = new Bob(px-bobDiameter, py, bobDiameter)
	bobObject3 = new Bob(px-bobDiameter, py, bobDiameter)
	bobObject4 = new Bob(px+bobDiameter, py, bobDiameter)
	bobObject5 = new Bob(px+bobDiameter*2, py, bobDiameter)

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	rope1 = new Chain(bobObject1.body, roof.body, -bobDiameter*2,0)
	rope2 = new Chain(bobObject2.body, roof.body, -bobDiameter,0)
	rope3 = new Chain(bobObject3.body, roof.body, 0,0)
	rope4 = new Chain(bobObject4.body, roof.body, +bobDiameter,0)
	rope5 = new Chain(bobObject5.body, roof.body, +bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display() 
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  drawSprites();
 
}



