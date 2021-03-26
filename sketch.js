const Engine = Matter.Engine;
const World  = Matter.World ;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos   = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var a = 50; a <=width-10; a=a+50) 
    {
    
       plinkos.push(new Plinko(a,175));
    }

     for (var b = 75; b <=width; b=b+50) 
    {
    
       plinkos.push(new Plinko(b,275));
    }

     for (var c = 50; c <=width-10; c=c+50) 
    {
    
       plinkos.push(new Plinko(c,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score = score + 10;
   }
 
  for (var d = 0; d < particles.length; d++) {
   
     particles[d].display();
   }
   for (var e = 0; e < divisions.length; e++) {
     
     divisions[e].display();
   }
}