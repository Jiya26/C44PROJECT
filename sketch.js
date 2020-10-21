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
  
  drawSprites();
 
}



