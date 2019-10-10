var img;
var img2;
var img3
var img4
var img5
var img6 
var img7
var img8
var img9
var img10 
var img11

function preload() {
  img= loadImage("bridge1.jpg");
  img2= loadImage("building.jpg");
  img3= loadImage("bridge 2.jpg");
  img4= loadImage("road.jpg");
  img5= loadImage("road 2.jpeg");
  img6= loadImage("bridge 3.jpg");
  img7= loadImage("building 2.jpeg");
  img8= loadImage("building 3.jpg");
  img9= loadImage("building 4.jpg");
  img10=loadImage("road 4.jpg");
  img11=loadImage("road 3.jpg");


}
function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  background(random(0,225),random(0,225),random(0,225));
  push();
  rectMode(CENTER);
  rotate(0);

  push();
  rotate(random(0,180))
  image(img,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img2,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img3,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img4,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img5,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,360))
  image(img6,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img7,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img8,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img9,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,90))
  image(img10,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  rotate(random(0,180))
  image(img11,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();


  pop()

  
  

}
function draw() {
  
}


  
