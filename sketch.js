const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine, myWorld, ground;

function setup() {
  createCanvas(1200,600);
  myEngine = Engine.create();
  myWorld = myEngine.world 

  g1 = new Ground(600,580,1200,20)// constructor parameter x ,y w,h
  b1 = new Box(800,500,75,75)
  b2 = new Box(1000,500,75,75)
  p1 = new pig(900,500)
  l1 = new log(900,450,300,PI)

  
  b3 = new Box(800,400,75,75)
  b4 = new Box(1000,400,75,75)
  p2 = new pig(900,400)
  l2 = new log(900,350,300,PI)

  b5 = new Box(900,300,75,75)
  l3 = new log(940,250,150,PI/5)
  l4 = new log(800,200,150,PI/-5)
  
  

  // 360 = 2 PI ; PI
  bird = new bird(50,50)

 

  //b3 = new Box(300, 100, 50, 100)
}

function draw() {
  Engine.update(myEngine)
  background("cyan");
 

  g1.display()
  b1.display()
  b2.display()
  
  p1.display()
  l1.display()

  bird.display()

  b3.display()
  b4.display()
  p2.display()
  l2.display()

  b5.display()
  l3.display()
  l4.display()
}