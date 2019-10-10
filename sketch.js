let bg1;
let bg2;
let bg3;
let mid1;
let mid2;
let mid3;
let fr1;
let fr1;
let fr2;


function setup() {
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
  
  function draw() {
      
    push();
      scale(1)
      image(mid1,500,430);
      pop();

      push();
      scale(1)
      image(mid2,300,290);
      pop();

      push();
      scale(1)
      image(mid3,800,560);
      pop();

      push();
      scale(1)
      image(fr1,500,450);
      pop();

      push();
      scale(1)
      image(fr2,570,90);
      pop();

      push();
      scale(1)
      image(fr3,608,320);
      pop();
    


    
    
       
  }
