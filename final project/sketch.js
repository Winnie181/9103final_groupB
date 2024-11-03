let myCircles = [];
let numOfCircles = 33;
let bgImage
let newImage
let bottomX = 85;  // 第一个半圆的 X 位置
let bottomY = 595;      // 半圆的 Y 位置
let diameter1 = 45; // 每个半圆的直径
let diameter2 = 25; // 每个半圆的直径
let spacing1 = 49;  // 半圆之间的间距
let spacing2 = 145
let spacing3 = 75
let topX1 = 135
let topX2 = 170
let topY = 520
function preload() {
   // 预加载背景图片
   //bgImage = loadImage('assets/background.jpg')
   newImage = loadImage('assets/1.jpeg')
}

let circlePositions =[[85,40],[85,85],[90,120],[114,130],[122,153],[120,183],[125,224],[150,248],[175,252],[198,247],
[222,253],[247,250],[272,248],[280,218],[285,190],[289,158],[285,125],[300,120],[325,125],[350,134],[358,115],
[180,165],[170,185],[190,183],[210,204],[230,185],[241,170],[210,230],
[210,289],[200,340],[202,385],[208,410],[195,430]
];


let circleDiameters = [50, 43, 29, 27, 23, 40, 53, 28, 26, 20,
31, 22, 33, 35, 25, 44, 20, 15, 33, 22, 20,
16, 16, 26, 35, 22, 16, 20,
47, 61, 30, 23, 35];

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

  
    arc(319,595,27,35,PI,0,fill(228, 102, 103))

    for (let i = 0; i < 2; i++) {
      fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
      arc(topX1 + i * spacing2, topY, diameter1, diameter1, 0, PI);
    }
    for (let i = 0; i < 5; i++) {
        fill(i % 3 === 0 ? color(142, 171, 126) : (i % 3 === 1 ? color(217, 194, 125) : color(228, 102, 103)));
        arc(bottomX + i * spacing1, bottomY, diameter1, diameter1, PI, 0);
    }
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
        arc(topX1 + i * spacing2, topY, diameter1, diameter1, PI, 0);
    }
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
        arc(topX2 + i * spacing3, topY, diameter2, diameter2, 0, PI);
    }
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
        arc(topX2 + i * spacing3, topY, diameter2, diameter2, PI, 0);
    }
}


  
function mousePressed(){
  for (let i = 0; i< numOfCircles; i++){
  myCircles[i].isMoving = true;
  }
 }

