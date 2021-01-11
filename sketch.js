const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird1;
var log1,log2,log3,log4;  
var ball ; 
var rope;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(800,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(700,100,70,70);
    box12 = new Box(700,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    ball= new A (200,200,50,50);
    rope = new Rope(ball.body,{x:600,y:50})

    
    ground = new Ground(600,600,1200,20);
}
function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
    box1.display();
    box3.display();
    box2.display();
    box4.display();
    ball.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box10.display();
    rope.display();
   
}