var canvas;
var music;
var movingball;
var redSurface,blueSurface,pinkSurface,yellowSurface; 
var topBoundry= createSprite();
var bottomBoundry= createSprite();
var rightBoundry= createSprite();
var leftBoundry= createSprite();

function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingball = createSprite(random(20,750));
    movingball.shapeColor = "green";
    movingball.velocityX = 6;
    movingball.velocityY = 6;
    movingball.debug = true;

    redSurface = createSprite(100, 500, 160, 35);
    redSurface.shapeColor = "red";
    redSurface.debug = true;

    blueSurface= createSprite(300, 500, 160, 35);
    blueSurface.shapeColor = "blue";
  
    pinkSurface= createSprite(500, 500, 160, 35);
    pinkSurface.shapeColor = "pink";
  
    yellowSurface= createSprite(700, 500, 160, 35);
    yellowSurface.shapeColor = "yellow";
   
    topBoundry= createSprite(400,1,800,5);
    bottomBoundry= createSprite(400,599,800,5);
    rightBoundry= createSprite(1,300,1,800);
    leftBoundry= createSprite(799,300,1,800);
    //create box sprite and give velocity
    
}

function draw() {
 background(rgb(169,169,169));
 //create edgeSprite

if(movingball.isTouching(redSurface) || movingball.isTouching(pinkSurface) || movingball.isTouching(blueSurface) 
|| movingball.isTouching(yellowSurface))
{

}

 isTouching(movingball,redSurface,blueSurface,pinkSurface,yellowSurface);

 bounceOff(movingball,redSurface,blueSurface,pinkSurface,yellowSurface,topBoundry,rightBoundry,leftBoundry);
 
 drawSprites();
    //add condition to check if box touching surface and make it box
}

function isTouching(movingball,redSurface,blueSurface,pinkSurface,yellowSurface)
{
if(movingball.isTouching(redSurface) && movingball.bounceOff(redSurface) )
{
  movingball.shapeColor = "red";
}

if(movingball.isTouching(blueSurface) && movingball.bounceOff(blueSurface))
{
  movingball.shapeColor = "blue";
}

if(movingball.isTouching(pinkSurface) && movingball.bounceOff(pinkSurface))
{
  movingball.shapeColor = "pink";
}

if(movingball.isTouching(yellowSurface) && movingball.bounceOff(yellowSurface))
{
  movingball.shapeColor = "yellow";
}

if(movingball.isTouching(pinkSurface))
{
  movingball.velocityX = 0;
  movingball.velocityY = 0;
}
}

function bounceOff(movingball,redSurface,blueSurface,pinkSurface,yellowSurface,topBoundry,rightBoundry,leftBoundry)
{
  
movingball.bounceOff(redSurface);

movingball.bounceOff(blueSurface);

movingball.bounceOff(pinkSurface);

movingball.bounceOff(yellowSurface);

movingball.bounceOff(topBoundry);

movingball.bounceOff(rightBoundry);

movingball.bounceOff(leftBoundry);

}
