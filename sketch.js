var path,boy,bomb, leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg;
var i;

function preload(){
  
  bombImg = loadImage("bomb.png");
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite boy (niño) corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// crear left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // el niño se mueve en el eje x con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createbomb();
   
  }

}

function createbomb() {
bomb = createSprite(random(50, 350),40, 10, 10);
bomb.addImage(bombImg);
bomb.scale=0.07;
bomb.velocityY = 3;
bomb.lifetime = 150;
  


 }  

}