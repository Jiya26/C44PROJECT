var car,boy,carImg,boyImg,roadImg,carOpenImg 

function preload()
{
	carImg=loadImage("images/audi car door close.png");
	carOpenImg = loadImage("images/audi car.png");
	boyImg = loadImage("images/boy image.png");
	roadImg = loadImage("images/road img.png")
}

function setup() {
	createCanvas(1500, 1500);
	car=createSprite(200,350,50,50);
	boy = createSprite(500,350,50,50);
	car.addImage("carcloseImg",carImg);
	boy.addImage("boystandImg",boyImg);
	car.addImage("caropenImg",carOpenImg);

}


function draw() {
  background(roadImg);

  if(keyDown(LEFT_ARROW)){
	   car.x = car.x -10 
	}
else if(keyDown(RIGHT_ARROW)){
		car.x = car.x+10
}
else if(keyDown(UP_ARROW)){
	car.y = car.y+10
}
else if(keyDown(DOWN_ARROW)){
	car.y = car.y-10
}

if(keyPressed(w)){
	boy.w = boy.w+10
}
else if(keyPressed(s)){
	boy.s = boy.s-10
}
else if(keyPressed(a)){
	boy.a = boy.a-10
}
else if(keyPressed(d)){
	boy.d = boy.d+10
}


  drawSprites();
}


