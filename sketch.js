const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var world, engine;
var paperObject, dustbinObject;

function setup() {
	createCanvas(1600, 700);


    paperObject = new Paper(200,450);
    dustbinObject = new dustbin(1200, 650);

	engine = Engine.create();
	world = engine.world;


	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
  
function draw() {
 
  background(0);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,width,10)



paperObject.display();
dustbinObject.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
		
	}
}