var bg1;
var bg2;
var bg3;
var mid1;
var mid2;
var mid3;
var fr1;
var fr1;
var fr2;
var x;
x=10;


function preload() {
    createCanvas(1000, 700);

    bg1= loadImage('images/fish.jpg');
    bg2= loadImage('images/floral.jpg');
    bg3= loadImage('images/rainbow.jpg');
    mid1= loadImage('images/egg.jpg');
    mid2= loadImage('images/tiger.jpg');
    mid3= loadImage('images/lanaface.jpg');
    fr1= loadImage('images/lanaface2.jpg');
    fr2= loadImage('images/moneysleep.jpg');
    fr3= loadImage('images/girls.jpg');


  
  }
  
  function setup(){
    createCanvas(windowWidth,windowHeight);
      frameRate(50);

  }


  function draw() {
    background(200,5,30);

      push();
      scale(1)
      image(mid1,0,0,mouseX * 2, mouseY * 2);
      pop();

      push();
      scale(.5)
      image(mid2,0,0);
      pop();
   

      

      
  
    


    
    
       
  }