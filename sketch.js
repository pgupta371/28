
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree, stone, boy, chain;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(150,635, 150, 200);
	boy.scale = 0.1;

	ground = new Ground(400, height, 800, 50);
	tree = new Tree(660, 510, 250, 350);
	stone = new Stone(48,290);
	mango1 = new Mango(300,200);
	mango2 = new Mango(320,250);
	mango3 = new Mango(370,225);
	mango4 = new Mango(330,190);
	mango5 = new Mango(350,230);
	chain = new Chain(stone.body, boy.body);
	World.add(world,chain);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
  stone.display();
  chain.display();

}
function mouseDragged(){
	 Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	 chain.stiffness=0.004;
}

function mouseReleased(){
chain.bodyA=null;

}





