const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var time=60;
var score=0;

var gameState;

function setup(){
    var canvas = createCanvas(2000,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2000,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,70, PI/10);
    log5 = new Log(870,120,70, PI/10);

    box6=new Box(130, 200, 50, 50);
    box7=new Box(130, 150, 50, 50);
    box8=new Box(130, 100, 50, 50);

    log9=new Log(130, 50, 50, PI/10);

    box10=new Box(270, 200, 50, 50);
    box11=new Box(270, 150, 50, 50);
    box12=new Box(270, 100, 50, 50);

    box13=new Box(400, 200, 50, 50);
    box14=new Box(400, 150, 50, 50);
    box16=new Box(400, 100, 50, 50);

    ground2 = new Ground(600,100,300,20);

    box15=new Box(600, 60, 70, 70);

    bird = new Bird(200,50);

    slingShot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255,255,255);
    gameState='PLAY';
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    log1.display();

    box3.display();
    box4.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    box7.display();
    box8.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    log9.display();

    bird.display();
    platform.display();
    slingShot.display(); 
    
    ground2.display();
    fill('black');
    if(frameCount%60===0 && gameState==='PLAY'){
        time=time-1;
    }
    if(score < 2000 &&gameState==='PLAY'){
    text('time:'+time, 100, 305);
    text('Knock-out all the items before time runs out!', 20, 324);
    text(' press ,R, to get bird back; score=2000 wins', 20, 340);
    text('score is:'+score, 20, 360);
    }
    if(score>=2000 && time != 0 && gameState==='PLAY'){
        fill('green');
        gameState='WON';
        text('you Won!', 20, 360);
        text('score is:'+score, 20, 340);
        
    }

    if(time <= 0 && score < 2000 && gameState==='PLAY'){
        fill('red');
        gameState==='LOST';
        text('lost!', 20, 360);
        text('score is:'+score, 20, 340);
    }

    if(time<0){
        time=0;
    }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===82){
        slingShot.attach(bird.body);
        
    }
}
