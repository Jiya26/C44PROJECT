var car,boy,carImg,boyImg,roadImg,carOpenImg;
var red,yellow,green,signal;
var timerYellow, timerGreen;


function preload()
{
	carImg=loadImage("images/audi car door close.png");
	carOpenImg = loadImage("images/audi car.png");
	boyImg = loadImage("images/boy image.png");
	roadImg = loadImage("images/road img.png");
	red=loadImage("images/traffic light/red light.jpg");
	yellow=loadImage("images/traffic light/yellow light.png");
	green=loadImage("images/traffic light/green light.png");
}

function setup() {
	createCanvas(1500, 700);
	car=createSprite(200,350,50,50);
	boy = createSprite(500,350,50,50);
	car.addImage("carcloseImg",carImg);
	boy.addImage("boystandImg",boyImg);
	car.addImage("caropenImg",carOpenImg);	

	car.scale=0.25;
	boy.scale=0.25;

	signal = createSprite(width/2 + 500, 200, 50, 50);
	signal.addImage("red", red);
	signal.addImage("yellow", yellow);
	signal.addImage("green", green);
	signal.scale = 0.4;
	signal.visible = false;
}


function draw() {
  background("LightBlue");

  image(roadImg,width/2-400,-height*6,800,height*7);

  if(keyDown(LEFT_ARROW)){
	   car.x = car.x -10 
	}
else if(keyDown(RIGHT_ARROW)){
		car.x = car.x+10
}
else if(keyDown(UP_ARROW)){
	car.y = car.y-10
}
else if(keyDown(DOWN_ARROW)){
	car.y = car.y+10
}

if(keyDown("w")){
	boy.y = boy.y-10
}
else if(keyDown("s")){
	boy.y = boy.y+10
}
else if(keyDown("a")){
	boy.x = boy.x-10
}
else if(keyDown("d")){
	boy.x = boy.x+10
}
camera.position.x = width/2;
camera.position.y = car.y;

trafficLight();

  drawSprites();
}
function trafficLight(){
	if(car.y%500===0){
		signal.visible = true;
		signal.changeImage("red");
		timerYellow = 100;
	}
	if(timerYellow !== undefined) {
		timerYellow--;
		if(timerYellow === 0) {
			console.log("change image")
			signal.changeImage("yellow");
			timerGreen = 100;
		}
	}
	
	if(timerGreen !== undefined) {
		timerGreen--;
		if(timerGreen===0){
			signal.changeImage("green");
		}

	}
}
	

