let bg;
let gb;
let bg2;

function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
    bg2 = loadImage('media/Turnstile2.png');
    gb = loadImage('media/MetroCardHand.png');
    bg = loadImage('media/Turnstyle.png');
}



function draw() {
    background(255);
//    background(bg); 
    image(bg,0,0,width,height);
    noStroke();
    fill(255,255,127,200); 
    
    image(gb,mouseX-gb.width/2,mouseY-gb.height/2); 
    
    image(bg2,0,0,width,height);

    
    
}