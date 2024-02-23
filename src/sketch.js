let leftRhinoX = 0;
let rightRhinoX = 0;
let clicked = false;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(750, 600);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBackground();

  drawRhino(190, 400, -0.5, 0.5, leftRhinoX);
  drawRhino(545, 400, 0.5, 0.5, rightRhinoX);
  drawRhino(350, 500, -0.25, 0.25, 0);

  kissAnimationLeft();
  kissAnimationRight();
  
 // leftRhinoX = leftRhinoX - 1;
}

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
      
      //moon
      fill(233,237,168);
      ellipse (370, 120, 100, 100);
      
    pop();
    }

    function mouseClicked() {
  
      clicked = !clicked; 
    }