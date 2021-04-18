var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score =0;
var man;

function preload(){
    man = loadImage("images/images/man1.png ");
}


function setup(){
   createCanvas = createCanvas(600,600);
   engine = Engine.create();
   world = engine.world;

   for(var i = 0;i<100;i++){
      particles.push(new Drop(random(0,400), random(0,400),10));
      score++;
    }
}

function draw(){
   background("black");
   textSize(20)
  //text("Score : "+score,20,30);
   Engine.update(engine);
  
  image (man,300,400,200,200);
  
   for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
}   

