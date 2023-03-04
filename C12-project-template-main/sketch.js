var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200,400,400)
 path.addImage("pathway",pathImg)
 path.velocityY=4
path.scale=1.2;

boy = createSprite(200,200,50,50)
boy.addAnimation("running",boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
leftBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;

  edges= createEdgeSprites(); boy.collide(edges[3]);
  
  boy.collide(leftBoundary); boy.collide(rightBoundary);
  
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
