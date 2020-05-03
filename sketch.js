const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  

  box1 = new BlueBox(500,360,20,30);
  box2 = new RedBox(520,360,20,30);
  box3 = new BlueBox(540,360,20,30);
  box4 = new RedBox(560,360,20,30);
  box5 = new BlueBox(580,360,20,30);
  box6 = new RedBox(600,360,20,30);

  box7 = new Box(510,330,20,30);
  box8 = new RedBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new RedBox(570,330,20,30);
  box11 = new BlueBox(590,330,20,30);

  box12 = new RedBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new RedBox(560,310,20,30);
  box15 = new BlueBox(580,310,20,30);

  box16 = new BlueBox(530,280,20,30);
  box17 = new RedBox(550,280,20,30);
  box18 = new BlueBox(570,280,20,30);

  box19 = new RedBox(540,250,20,30);
  box20 = new BlueBox(560,250,20,30);

  box21= new RedBox(550,220,20,30);

  
  box22 = new BlueBox(550,125,20,30);
  box23 = new RedBox(570,125,20,30);
  box24 = new BlueBox(590,125,20,30);
  box25 = new RedBox(610,125,20,30);
  box26 = new BlueBox(630,125,20,30);
  box27 = new RedBox(650,125,20,30);

  box28 = new BlueBox(560,95,20,30);
  box29 = new RedBox(580,95,20,30);
  box30 = new BlueBox(600,95,20,30);
  box31 = new RedBox(620,95,20,30);
  box32 = new BlueBox(640,95,20,30);

  ball = new Ball(0,0,30);

  spring = new Sling(ball.body,{x:150,y:270});

  ground = new Platform(400,390,800,20);

  platform_hovering = new Platform(600,150,200,20);
  
  
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);  
  ground.display();
  platform_hovering.display();

  debug:true;

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  ball.display();

  spring.display();
  
} 
function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

  spring.fly();
}

function keyPressed(){

  if(keyCode === 32){

      spring.attach(ball.body)
  }
}

  
