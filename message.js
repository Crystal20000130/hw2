function setup() {
  createCanvas(800, 800);
}

function printC(x,y){
  line(x,y,x+25,y)
  line(x,y,x,y+50)
  line(x,y+50,x+25,y+50)
}

function printR(x,y){
 line(x,y,x+25,y)
  line(x,y,x,y+50)
  line(x,y+25,x+25,y+25)
  line(x+25,y,x+25,y+25)
  line(x,y+25,x+25,y+50)
}

function printY(x,y){
line(x,y,x+15,y+25)
  line(x+15,y+25,x+30,y)
  line(x+15,y+25,x+15,y+50)  
}
  
function printS(x,y){
   line(x,y,x+25,y)
  line(x,y,x,y+25)
  line(x,y+25,x+25,y+25)
  line(x+25,y+25,x+25,y+50)
  line(x+25,y+50,x,y+50)
}

function printT(x,y){
line(x,y,x+30,y)
  line(x+15,y,x+15,y+50)
}

function printA(x,y){ 
  line(x,y,x+20,y+50)
  line(x,y,x-20,y+50)
  line(x-10,y+25,x+10,y+25)
}

function printL(x,y){
  line (x,y,x,y+50)
  line(x,y+50,x+30,y+50)
  }

function draw() {
  background(220);
  printC(150,100) 
  printR(200,100)
  printY(250,100)
  printS(300,100)
  printT(350,100)
  printA(400,100)
  printL(450,100) 
  }
