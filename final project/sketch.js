let myCircles = [];
let numOfCircles = 33;
let bgImage
let bottomX = 111;  // 第一个半圆的 X 位置
let bottomY = 494;      // 半圆的 Y 位置
let diameter1 = 34; // 每个半圆的直径
let diameter2 = 25; // 每个半圆的直径
let spacing1 = 37;  // 半圆之间的间距
let spacing2 = 105
let spacing3 = 43
let topX1 = 148
let topX2 = 180
let topY = 445
function preload() {
   // 预加载背景图片
   bgImage = loadImage('assets/background.jpg')
}

let circlePositions =[[85,40],[85,85],[90,120],[114,130],[122,153],[120,183],[125,224],[150,248],[175,252],[198,247],
[222,253],[247,250],[272,248],[280,218],[285,190],[289,158],[285,125],[300,120],[325,125],[350,134],[358,115],
[180,165],[170,185],[190,183],[210,204],[230,185],[241,170],[210,230],
[210,289],[200,340],[202,385],[208,410],[200,432]
];


let circleDiameters = [50, 43, 29, 27, 23, 40, 53, 28, 26, 20,
31, 22, 33, 35, 25, 44, 20, 15, 33, 22, 20,
16, 16, 26, 35, 22, 16, 20,
47, 61, 30, 23, 23];

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
     this.stroke = color(0)
     this.originalX = x;
     this.originalY = y;
     this.isMoving = false;
  
    }
  
    draw(){
     fill(this.color1);
     stroke(this.stroke)
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
  background(bgImage);

    for (let i = 0; i < numOfCircles; i++){
      myCircles[i].draw()
      myCircles[i].move()
    }
    stroke(0)
    strokeWeight(2);
  
     //底部绿色矩形
    fill(142, 171, 126);
    rect(27, 450, 345, 55,);
 
    //两边的竖线
    line(65, 450, 65, 505);
    line(340, 450, 340, 505);
    //底部黄色较大矩形    

    fill(217, 194, 125);
    rect(92, 444, 204, 52);
    //底部红色小矩形    
    stroke(217, 194, 125)
    strokeWeight(2);
    fill(228, 102, 103);
    rect(130,446,35,48);
    //底部绿色小矩形
    fill(142, 171, 126);
    rect(165, 446, 37, 48)
    rect(237, 446, 35, 48)


    arc(285,494,19,28,PI,0,fill(142, 171, 126))

    for (let i = 0; i < 2; i++) {
      fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
      arc(topX1 + i * spacing2, topY, diameter1, diameter1, 0, PI,);
    }
    for (let i = 0; i < 3; i++) {
        fill(i % 3 === 0 ? color(142, 171, 126) : (i % 3 === 1 ? color(217, 194, 125) : color(228, 102, 103)));
        arc(bottomX + i * spacing1, bottomY, diameter1, diameter1, PI, 0);
    }
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(217, 194, 125));
        arc(bottomX + i * spacing1 + 110, bottomY, diameter1, diameter1, PI, 0);
    }     
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
        arc(topX2 + i * spacing3, topY, diameter2, diameter2, 0, PI);
    }

    stroke(0)
    strokeWeight(2);
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
        arc(topX1 + i * spacing2, topY, diameter1, diameter1, PI, 0);
    }

    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
        arc(topX2 + i * spacing3, topY, diameter2, diameter2, PI, 0);
    }
    stroke(217, 194, 125)
    strokeWeight(2);
    line(130, 446, 270, 446);

}


  
function mousePressed(){
  for (let i = 0; i< numOfCircles; i++){
  myCircles[i].isMoving = true;
  }
 }

