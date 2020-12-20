const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground,background;
var polygon,polygonImage;

function preload(){
  polygonImage = loadImage("Polygon.png");
}

function setup() {
  createCanvas(1000,700);

  
  ground = createSprite(200,100,20,10);  
  ground.shapeColor = "green";


  polygon = new Polygon(bird.body,{x:200, y:50});

}

function draw(){
background(0);




}

function mouseDragged(){
 Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Polygon.fly();
}


