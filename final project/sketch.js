let myCircles = [];
let numOfCircles = 33;
let bgImage
let newImage

function preload() {
   // 预加载背景图片
   //bgImage = loadImage('assets/background.jpg')
   newImage = loadImage('assets/1.jpeg')
}

let circlePositions =[[85,45],[85,85],[90,120],[110,130],[120,150],[120,180],[125,225],[150,250],[175,255],[200,250],
[220,255],[245,250],[270,250],[280,220],[285,190],[290,160],[285,125],[300,120],[325,125],[345,135],[355,115],
[180,165],[170,185],[190,185],[210,205],[230,185],[240,175],[210,230],
[210,290],[200,340],[205,385],[210,410],[195,430]
];

let circleDiameters = [50, 40, 30, 30, 25, 40, 50, 30, 30, 25,
35, 25, 35, 35, 30, 45, 20, 15, 35, 20, 20,
20, 20, 30, 35, 25, 20, 20,
50, 65, 30, 25, 35];

function setup(){
   createCanvas(400,600);
   
   for(let i = 0 ; i <numOfCircles; i++){
    myCircles.push(new MyCircleClass(circlePositions[i][0], circlePositions[i][1],circleDiameters[i]));
    }
   }
  
  class MyCircleClass {
   constructor(x,y,size){
     this.x = x;
     this.y = y;
     this.size = size;
     this.speed = 2;
     this.color1 = color(228, 102, 103);
     this.color2 = color(142, 171, 126);
     this.originalX = x;
     this.originalY = y;
     this.isMoving = false;
  
    }
  
    draw(){
     fill(this.color1);
     arc(this.x,this.y,this.size,this.size, HALF_PI, -HALF_PI, PIE);
     fill(this.color2);
     arc(this.x,this.y,this.size,this.size, -HALF_PI, HALF_PI, PIE);
  
    }
    move(){
     if (this.isMoving){
      this.x += this.speed;
     }
    }
   }
  
function draw() {
  background(newImage);

    for (let i = 0; i < numOfCircles; i++){
      myCircles[i].draw()
      myCircles[i].move()
    }
    stroke(0)
    strokeWeight(2);
  
    fill(142, 171, 126);
    rect(0, 530, width, 80)
    line(30, 530, 30, 610)
    line(390, 530, 390, 610)
    fill(217, 194, 125)
    rect(62, 520, 270, 75)
  
    fill(228, 102, 103);
    rect(112, 520, 48, 75)
    fill(142, 171, 126);
    rect(160, 520, 48, 75)
    fill(217, 194, 125)
    rect(208, 520, 48, 75)
    fill(142, 171, 126);
    rect(256, 520, 48, 75)
    fill(217, 194, 125)
    rect(304, 520, 28, 75)
    let startX = 90;  // 第一个半圆的 X 位置
    let y = 595;      // 半圆的 Y 位置
    let diameter = 45; // 每个半圆的直径
    let spacing = 48;  // 半圆之间的间距
  
    for (let i = 0; i < 5; i++) {
      fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
      arc(startX + i * spacing, y, diameter, diameter, PI, 0);
    }
}


  
function mousePressed(){
  for (let i = 0; i< numOfCircles; i++){
  myCircles[i].isMoving = true;
  }
 }

