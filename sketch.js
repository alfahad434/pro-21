var backgroundImg,background;
var rocketImg,rocket
var earthImg,earth;
var moonImg,moon;


function preload(){
  backgroundImg= loadImage("gg ff.jpg")
  rocketImg= loadImage("rocket.jpg")
  earthImg= loadImage("earth.jpg")
  moonImg= loadImage("moon.jpg")
  gameSound = loadSound("sound.mp4")
}

function setup() {
    createCanvas(600,600);
    gameSound.loop();
    background = createSprite(600,600)
background.addImage("background",backgroundImg )
background.velocityY = 4;
    background.scale = 10

rocket = createSprite(200,200)
rocket.addImage("rocket",rocketImg)

earthGroup = new Group();
moonGroup = new Group();


  }
  
  function draw() {
 spawnEarth();


 if(keyDown("right_arrow")){
  
    rocket.x=ghost.x+3
 }

 if(keyDown("left_arrow")){
  
    rocket.x=ghost.x-3
 }





    drawSprites();
function spawnEarth()
{
if(frameCount % 240 === 0){
     var earth = createSprite(200,-250)
var moon = createSprite(200,10);
earth.addImage(earthImg)
moon.addImage(moonImg)

earth.velocityY =1;
moon.velocityY = 1;
earth.lifetime=800
moon.lifetime=800

moonGroup.add(moon)
earthGroup.add(earth)
}
}

  }
