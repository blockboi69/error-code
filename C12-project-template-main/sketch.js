var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  path = loadAnimation("path.png")
  Runner = loadAnimation("Runner-1.png","Runner-2.png")
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200,400,400)
 path.setAnimation("path")
 path.velocityY=-10
path.scale=1.2;

boy = createSprite(200,200,50,50)
boy.setAnimation("running",Runner)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visibility=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
leftBoundary.visibility=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  if (boy.isTouching(edges)){
  boy.x=200
  boy.y=200
  }
  
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
