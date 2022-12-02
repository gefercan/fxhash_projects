// variations from Coding Train
// by Daniel Shiffman

let array1=["hola","como","estas","dijo","lentamente","el campo","desaparece","la noche","2021","23/7",];
let index=0;
let z=0;
let period=40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//creating rectangles from the cnetr to outside;
	rectMode(CENTER);
	print("start");
}

function draw() {
//defining the variables
	let x=windowWidth/2;
	let y=windowHeight/2;
//calling the functions
	basicLoops(x,y);
	basicShapes(x,y);
	basicCursor(x,y);
	basicText(x,y);
	movingBall();
	cover();
}


function basicCursor(x,y){
	//mapping the color
	let col1=map(mouseX, width-width, width ,50 ,210);
	let col2=map(mouseX, width-width, width ,50 ,100);
	fill(col1,col2,col1,col2);
	//placing the circles
	let x1=ellipse(x - mouseX + (x/10),x- mouseY+(x/10), x/4, x/4);
  let x2=ellipse(x + mouseX - (x/10),x+ mouseY-(x/10), x/8, x/8);
	let x3=ellipse(y + mouseX/2,x- mouseY+120, x/8, x/8);
	let x4=ellipse(y + mouseX - 120,y- mouseY+120, x/4, x/4);
	let x5=ellipse(mouseX - 120,mouseY+120, x/24, x/24);
}

 function movingBall(){
	 
		ellipse(z,200,100,100);
			 if(z>width){
				 print("off")
			 }
		z = z +3;
	}

function basicShapes(x,y){
		//ESSENTIAL SHAPES
	
	fill(123);
	rect(x,y,x/2,x/2 ); 
	noStroke();
	fill(150,13,14,80);
	//circle
	ellipse(x,y,y/2,y/2);
	//rectangulo
	fill(100,23,34,70);
	rect(x,y,y/2,y/2);
	//triangulo
	fill(width/2,23,height/2,80);
	triangle(x,y, x+50,y+(x/4),x-50,y+(x/4));
	//trapezoide
	quad (mouseX,height-height,x+width,height-height,x+width,height/2, mouseY+x,height/2);
	quad (mouseX,height/2,x-width,height/2,x-width,height,mouseY+y,height);
	fill(100,40,100,20);
	quad (mouseX,height-height,x+width,height-height,x+width,height, mouseY+x,height);
	arc(x,y,y/2,y/2,PI,PI*2);
	
 //conditional loop
	if(mouseX < x+200 && mouseX > x-200 ){
		fill(random(250),13,random(200),90);
	}
	else{
		fill(random(140,200),random(140,200),random(140,200),100);
	}
	//arco
	
	fill(200,0,0,100);
	ellipse(x,y,50,50);
	col3 = map(mouseX,0,width,x-(x/4),x+(x/4));
	
	fill(0,50,100,40);
	beginShape();
	vertex(x-(x/4),y-(x/4));
	vertex(col3,y);
	vertex(x+(x/4),y-(x/4));
	vertex(x+(x/4),y+(x/4));
	vertex(col3,y);
	vertex(x-(x/4),y+(x/4));
	endShape(CLOSE);
}

function basicText(x,y){
	fill(255,80);
	textSize(x/5);
	textAlign(CENTER);
	text(array1[8],x,y);
	text(array1[9],x,y+(x/4));
	textSize(x/10);
	text(array1[index],x,y+(x/10));
}

function mousePressed(){
		index=index+1;
	if (index>7){
		index=0;
		}
	}

function basicLoops(x,y){
		background(x,90,80);
	//BASIC LOOPS
	//using for loop to create regularly separated squares
	
	for(i=0;i< width;i++){
	 
		if( mouseX < x+200 && mouseX > x-200){
			fill(mouseX/10,width/40,mouseY/2,height/20);
			rect(i,height-height,mouseX/120,height);
		}
	  else if ( mouseY < y+200 && mouseY > y-200){
			fill(x/(x-y),x/(x*2),x/(x+y),random(100));
			rect(i-10,x/2,x/50,x/8);
		}
	 i=i+x/20;
	}
	
	
	for(x=100;x<width-100;x++){
		
				for(y=200;y<height-100;y++){
					noStroke();
					fill(width/2,y,height/2,y/4);
					ellipse(x,y,20,20);
					y = y+50;
			}
		x = x+50;
	}
}


function cover(){
	//textos en el costado
	let numbers1= ((frameCount/period)*360)*100;
	let numbers2= sin(((frameCount/period)*360)*100);
	let pendulum= floor(sin((frameCount/period)*360)*100);
	
	noStroke();
  fill(180);
	textAlign(LEFT);
	textSize(14);
	text(numbers1,width/10,50);
	text(numbers2,width/10,75);
	text((frameCount % period)*100,width/10,100);
	textSize(64);
	text(pendulum,width/10,150);
	textSize(12);
	text("exercise made with loops, at a very basic level,if statements as well as other"
			 +"functions from different global variables, these have been combined and "
			 +"recombined, as you will see in the code",width/6.5,500,200,600);
	
	noStroke();
	fill(200);
	textSize(123);
	text("05",width/10,height-(height/20));
	
	noStroke();
  fill(180)
	rect(width/6.5,400,20,50);
	rect(width/10+30,400,10,50);
	rect(width/10+50,400,50,50);
	
	strokeWeight(2);
	stroke(113);
	line(width/10,20,width-100,20);
	line(width/10,150,width/10 + 200,150);
	line(width/10,350,width/10 + 200,350);
	line(width/10,height-20,width-100,height-20);
}
