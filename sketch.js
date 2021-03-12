const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const cons = Matter.Constraint;

var gameState = "onSling"
var fired
var engine, world;
var box1, pig1;
 function preload(){
     bgimg=loadImage("sprites/bg.png")
 }
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    fired=false
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,305,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    glass1 = new IceBox(700,240,50,50);
    glass2 = new IceBox(920,240,50,50);
    glass3 = new IceBox(700,240,50,50);
    glass4 = new IceBox(920,240,50,50);
    pig3 = new Pig(810, 220);

    log3 = new Log(810,180,230, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    s=new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    background(bgimg);
    if(mouseIsPressed){
        if(mouseX >= 0  && fired === false){
            Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
        }
    }
    console.log("X :"+ bird.body.position.x + "Y :" + bird.body.position.y)
    if(bird.body.velocity.x > 30){
        Matter.Body.applyForce(bird.body, bird.body.position, {x: (bird.body.velocity.x) * -1, y: 0});
    }
    if(bird.body.velocity.y > 15){
        Matter.Body.applyForce(bird.body, bird.body.position, {x: 0, y: (bird.body.velocity.x) * -1});
    }

   
    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    platform.display();
    
    glass1.display()
    glass2.display()
    glass3.display()
    glass4.display()
    pig3.display();
    log3.display();
   
    box5.display();
    log4.display();
    log5.display();

    bird.display();
    s.display()
}

function mouseDragged() {
    if(gameState === "onSling"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased() {
    if(fired===false)
   {s.fly()   
   gameState = "release"
   fired=true
}  
}

function keyPressed(){
    if(keyCode === 32){
     s.attach(bird.body)
     gameState = "onSling"  
     fired=false

    }
}