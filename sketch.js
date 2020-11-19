
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bb2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(380,100,250,10);

	bob1 = new Bob(270,400,20);
	rope1= new Rope(bob1.body,{x:270,y:105});

	bob2 = new Bob(320,400,20);
	rope2= new Rope(bob2.body,{x:320,y:105});

	bob3 = new Bob(370,400,20);
  rope3= new Rope(bob3.body,{x:370,y:105});
  
	bob4 = new Bob(420,400,20);
	rope4= new Rope(bob4.body,{x:420,y:105});

	bob5 = new Bob(470,400,20);
	rope5= new Rope(bob5.body,{x:470,y:105});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

  roof.display();

  if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-50})
	}
 
}



