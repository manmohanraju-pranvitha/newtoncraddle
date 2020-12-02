const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine;
var world;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var sli1,sli2,sli3,sli4,sli5;
function setup() {
	createCanvas(windowWidth/2,windowHeight);


	engine = Engine.create();
    world = engine.world;
    roof1=new Roof(windowWidth/4,windowHeight/2-170,windowWidth/2,10);
bob1=new pendulum(windowWidth/4-108,windowHeight/2+190);
bob2=new pendulum(windowWidth/4-58,windowHeight/2+190,40);
bob3=new pendulum(windowWidth/4-0,windowHeight/2+190,156);
bob4=new pendulum(windowWidth/4+58,windowHeight/2+190,184);
bob5=new pendulum(windowWidth/4+108,windowHeight/2+190,96);
sli1=new Sling(bob1.body,roof1.body);
sli2=new Sling(bob2.body,roof1.body);
sli3=new Sling(bob3.body,roof1.body);
sli4=new Sling(bob4.body,roof1.body);
sli5=new Sling(bob5.body,roof1.body);


    Engine.run(engine)
}
function draw(){
rectMode(CENTER);
background("pink");
Engine.update(engine);
roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
sli1.display();
sli2.display();
sli3.display();
sli4.display();
sli5.display();

}


