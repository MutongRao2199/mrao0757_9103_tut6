let img;
let segments = []; //where we will store each segemnt
let numSegements = 50; //how many segemnts to creat
let drawSegments = true;

let pixelColour;

function preload() {
img = loadImage("assets/Mona_Lisa.jpg")  
}


function setup() {
  createCanvas(img.width, img.height);
  
  let segWidth = img.width/numSegements;
  let segHeight = img.height/numSegements;

  for (let yPos = 0; yPos < img.height; yPos += segHeight){// vertical
    for (let xPos = 0; xPos < img.width; xPos += segWidth){//horizontal
    let fillColor = img.get(xPos + segWidth/2, yPos + segHeight/2);  
    let segment = new ImageSegment(xPos, yPos, segWidth, segHeight, fillColor);//create segment
    segments.push(segment);//add the segment to the end of the segments array
    }
  }
  pixelColour = color(0);
}

function draw() {
  if (drawSegments){
    for (const segment of segments){
      segment.draw();
    }
  } else {
    image(img, 0, 0);
  }


 
  stroke(255);
  fill(pixelColour)
  circle(mouseX, mouseY, 40);
}

function mouseMoved(){
  pixelColour = img.get(mouseX, mouseY);//read the colour under the mouse and assign to pixelcolour
}


function keyPressed(){
  if (key == " "){
    drawSegments = !drawSegments;
  }
}
class ImageSegment{



    constructor(xPos, yPos, width, height, fillColor){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
  }


draw() {
  fill(this.fillColor);
  stroke(0);
  rect(this.xPos, this.yPos, this.width, this.height);
  }
}
