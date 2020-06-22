

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world,body,material1,material2,material,paper,ground;

function setup() {
	
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	
	material= new Dust(550,640,20,100)
	material1= new Dust(615,685,150,20)
	material2= new Dust(680,640,20,100)
	paper= new Paper(200,680,30,30)
	ground = new Ground(600,height,1200,20)
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  material.display();
  material2.display();
  material1.display();
  paper.display();
  ground.display();
  
}
function keyPressed(){
	if(keyCode===32)
	{
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}
