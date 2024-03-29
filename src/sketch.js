let leftRhinoX = 0;
let rightRhinoX = 0;
let clicked = false;
var fade;
var fadeAmount = 0;
var fadeHeart;
var fadeHeartAmount = 0;


function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(750, 600);
  myCanvas.parent("canvas-parent");
  fade = 0;
  fadeHeart = 0;

}

function draw() {
  background(220);
  drawBackground();

//rhinos
  // x, y, sx, sy, headX
  drawRhino(190, 400, -0.5, 0.5, leftRhinoX);
  drawRhino(545, 400, 0.5, 0.5, rightRhinoX);
  drawBabyRhino(350, 500, -0.25, 0.25, 0);

//heart
  drawHeart(294, 175);

//animations
  kissAnimationLeft();
  kissAnimationRight();

//fades
  babyRhinoFade();
  heartFade();
}

//_____ANIMATION FUNCTIONS_____

//LEFT RHINO KISS ANIMATION
function kissAnimationLeft() {
  
  if (clicked) {
    if (leftRhinoX < 10) {
    leftRhinoX = leftRhinoX - 0.5;
  }
    while (leftRhinoX < -10) {
      leftRhinoX = leftRhinoX + 0.5;
    }
  }
}

//RIGHT RHINO KISS ANIMATION
function kissAnimationRight() {

if (clicked) {
 
  if (rightRhinoX < 10) {
     rightRhinoX = rightRhinoX - 0.5;
   }
    while (rightRhinoX < -10) {
      rightRhinoX = rightRhinoX + 0.5; 
    }
    
 }
  
}

//____FADE FUNCTIONS_____

//HEART FADE IN
function heartFade() {
 
  if (leftRhinoX <= -10) {
    
  
    translate(294, 175);
    noStroke(); 
    
     if (fadeHeart <= 0) fadeHeartAmount= fadeHeartAmount + 10; 
   
   if (fadeHeart>255) fadeHeartAmount; 
   
   fadeHeart += fadeHeartAmount; 
      print(fadeHeart)
  
  }
  }

//BABY FADE IN
function babyRhinoFade() {
  
  if (leftRhinoX <= -10) {
   
 if (fade <= 0) fadeAmount= fadeAmount + 4; 

if (fade>255) fadeAmount; 

fade += fadeAmount; 
   print(fade)
    
 }
}

//____DRAW FUNCTIONS____

//HEART
function drawHeart(x, y) {
  
  push(); 
    
    translate(x, y);
    noStroke();   
    
  //heart 
   describeElement('Heart');
    fill(255,0,0, fadeHeart);
    circle(66.6, 66.6, 20);
    circle(83.2, 66.6, 20);
    triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
    
  pop();
  }

//ADULT RHINOS
function drawRhino(x, y, sx, sy, headX) {
  
    push();
  
  translate(x, y);
  scale(sx, sy);
  noStroke();
  
   //---------main body--------
    fill('#445F96');
    rect(-150, -300, 350, 200);
    
    //back hindquarters
    //top triangle
    fill('#2E4166');
    triangle(225, -325, 100, -225, 300, -225);
    
    //bottom triangle
    fill('#4C6DAF');
    triangle(100, -225, 225, -50, 300, -225);
    
    //back leg
    fill('#738DC0');
    rect(175, -75, 50, 75);
    
    //back paw
    angleMode(DEGREES)
    fill('#445F96');
    arc(175, 0, 100, 75, 180, 360);
    
    //tail
    fill('#2F497E');
    rect(275, -225, 50, 75);
    fill('#445F96');
    triangle(300, -150, 275, -100, 325, -100);
    
    
    //front shoulder
    //top triangle
    fill('#31446B');
    triangle(-150, -325, -200, -250, 0, -250);
    
    //bottom triangle
    fill('#7B96CC');
    triangle(-200, -250, -150, -100, 0, -250);
    
    //horizontal rectangle
    fill('#2E4675');
    rect(-200, -125, 100, 50);
    
    //vertical rectangle
    fill('#6B81AF');
    rect(-200, -75, 50, 50);
    
    //paw
    fill('#233861');
    arc(-175, -30, 100, 60, 270, 90);
    
    
    //-----------head----------
    push();
    translate(headX, 0);
    //main head shape
    fill('#202F4E');
    triangle(-200, -310, -350, -125, -145, -175);
    
    //nose
    fill('#5372B1');
    rect(-350, -200, 100, 75);
    
    //ears
    //left ear
    push();
    rotate(45);
    arc(-390, -75, 50, 25, 180, 0);
    pop();
    
    //right ear
    fill('#314B7F');
    arc(-200, -330, 25, 50, 270, 90);
    //eye
    fill(300);
    ellipse(-210, -210, 15, 15);
    
     //horn
    triangle(-300, -275, -350, -200, -285, -200);
    pop();
    
    pop();
    
  }

  function drawHiddenCreature(xSecret, ySecret, scaleSecret, colorHeadRearTail, colorChestSnoutThigh)
{
  push();
  
    translate(xSecret, ySecret);
    scale(scaleSecret);
    
    
    //head and neck
    noStroke();
    fill(45, 53, 64);
    rect(80, -250, 40, 70);
    fill(colorHeadRearTail);
    ellipse(95, -275, 70);
    
    //ear
    fill(28, 32, 38);
    triangle(70, -265, 40, -250, 70, -300);
    
    //snout
    fill(colorHeadRearTail);
    triangle(125, -270, 150, -250, 110, -260);
    stroke(0)
    fill(colorChestSnoutThigh);
    arc(127, -275, 60, 25, PI + HALF_PI, HALF_PI );
    
    //nose
    fill(242, 198, 172);
    ellipse(153, -280, 10)
  
    //body
    fill(28, 32, 38);
    quad(50, -130, 60, -205, -50, -200, -50, -160);
    fill(colorChestSnoutThigh);
    ellipse(80, -170, 125);
    fill(colorHeadRearTail);
    ellipse(-50, -180, 80);
    
    //front legs
    noStroke();
    fill(10, 11, 13);
    quad(160, -25, 170, -25, 130, -135, 100, -125);
    fill(45, 53, 64);
    quad(140, -25, 150, -25, 110, -135, 80, -125);
    
    //rear legs
    fill(10, 11, 13);
    triangle(-25, -150, -60, -140, -30, -100);
    fill(10, 11, 13);
    quad(-30, -100, -43, -118, -63, -55, -50, -55);
    fill(45, 53, 64);
    quad(-50, -88, -63, -108, -83, -43, -70, -43);
    fill(45, 53, 64);
    triangle(-40, -140, -50, -85, -80, -140);
    stroke(0)
    fill(colorChestSnoutThigh);
    ellipse(-60, -165, 70);
    
    //back most rear paw
    noStroke();
    fill(10, 11, 13);
    quad(-63, -55, -50, -55, -20, -30, -35, -30);
    fill(45, 53, 64);
    ellipse(-19, -30, 30, 20);
    
    //front most rear paw
    fill(45, 53, 64);
    quad(-83, -43, -70, -43, -40, -18, -53, -18);
    fill(164, 165, 166);
    ellipse(-40, -20, 30, 20);
    
    //front paws
    fill(70, 80, 89);
    ellipse(170, -30, 28, 18);
    fill(164, 165, 166);
    ellipse(155, -25, 30, 20);
   
    //tail
    fill(28, 32, 38);
    quad(-85, -200, -120, -255, -110, -255, -70, -213);
    fill(28, 32, 38);
    quad(-110, -255, -120, -255, -90, -290, -80, -290);
    fill(colorHeadRearTail);
    ellipse(-85, -290, 20);
   
    //eye
    stroke(0)
    fill(0);
    ellipse(110, -285, 10);
    fill(300);
    ellipse(112, -285, 5);
  pop();
}


//BABY RHINO
function drawBabyRhino(x, y, sx, sy, headX) {
  
  push();
  
    translate(x, y);
    scale(sx, sy);
    noStroke();
    
  
  
   //---------main body--------
    fill(68,95,156, fade);
    rect(-150, -300, 350, 200);
    
    //back hindquarters
    //top triangle
    fill(46,65,102, fade);
    triangle(225, -325, 100, -225, 300, -225);
    
    //bottom triangle
    fill(76,109,175, fade);
    triangle(100, -225, 225, -50, 300, -225);
    
    //back leg
    fill(115,141,192, fade);
    rect(175, -75, 50, 75);
    
    //backrgb
    angleMode(DEGREES)
    fill(68,95,150, fade);
    arc(175, 0, 100, 75, 180, 360);
    
    //tail
    fill(47,73,126, fade);
    rect(275, -225, 50, 75);
    fill(68,95,150, fade);
    triangle(300, -150, 275, -100, 325, -100);
    
    
    //front shoulder
    //top triangle
    fill(49,68,107, fade);
    triangle(-150, -325, -200, -250, 0, -250);
    
    //bottom triangle
    fill(123,150,204, fade);
    triangle(-200, -250, -150, -100, 0, -250);
    
    //horizontal rectangle
    fill(46,70,117, fade);
    rect(-200, -125, 100, 50);
    
    //vertical rectangle
    fill(107,129,175, fade);
    rect(-200, -75, 50, 50);
    
    //paw
    fill(35,56,97, fade);
    arc(-175, -30, 100, 60, 270, 90);
    
    
    //-----------head----------

    //main head shape
    fill(32,47,78, fade);
    triangle(-200, -310, -350, -125, -145, -175);
    
    //nose
    fill(83,114,177, fade);
    rect(-350, -200, 100, 75);
    
    //ears
    //left ear
    push();
    rotate(45);
    arc(-390, -75, 50, 25, 180, 0);
    pop();
    
    //right ear
    fill(49,75,127, fade);
    arc(-200, -330, 25, 50, 270, 90);
    //eye
    fill(300, fade);
    ellipse(-210, -210, 15, 15);
    
     //horn
    triangle(-300, -275, -350, -200, -285, -200);
    
  pop();
    
  }

//BACKGROUND
function drawBackground() {

    push();
    
      //night background
      noStroke();
    
      fill(20,20,60);
      rect(0, 0, 800, 800);
      
      fill(34,34,59);
      rect(0, 400, 800, 400);
      
      //moonlight
      fill(237, 237, 168, 50);
      triangle(370, 120, 100, 600, 650, 600);
      
      drawHiddenCreature(365, 160, 0.25, color(31, 162, 191), color(17, 142, 191));
      //moon
      fill(233,237,168);
      ellipse (370, 120, 100, 100);
      
    pop();
    }

    function mouseClicked() {
  
      clicked = !clicked; 
    }