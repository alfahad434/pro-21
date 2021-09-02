var astronaut;



function preload(){
bg = loadImage("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");
bath = loadAnimation("bath1.png","bath2.png");


}


function setup() {
  createCanvas(400, 400);

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;










}



function draw() {
  background("bg");


  textSize(20);
  text("Instructions:",300,300);

textSize(20);
text("Up Arrow = Brushing",290,290);

textSize(20);
text("Down Arrow = Gymming",280,280);

textSize(20);
text("Left Arrow = Eating",270,270);

textSize(20);
text("Right Arrow = Bathing",260,260);

textSize(20);
text("m key = Moving",250,250);

textSize(20);
text("d key = Drinking",240,240);



if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;

}


if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("Gymming",gym);
  astronaut.changeAnimation("Gymming");
  astronaut.y = 50;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  
  }


  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating");
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.x = 50;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      
      }

      if(keyDown("m")){
        astronaut.addAnimation("moving",move);
        astronaut.changeAnimation("moving");
        astronaut.y = 200;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        
        }


        if(keyDown("d")){
          astronaut.addAnimation("drinking",drink);
          astronaut.changeAnimation("drinking");
          astronaut.y = 250;
          astronaut.velocityX = 0;
          astronaut.velocityY = 0;
        
          }






drawSprites();
}