var ball
function setup() {

  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown(RIGHT_ARROW)){
    ball.x += 5
  }

  if (keyDown(LEFT_ARROW)){
    ball.x -= 5
  }

  if (keyIsUp(DOWN_ARROW)){
    background("green")
  }

  if (keyIsDown(DOWN_ARROW)){
    background("Red")
  }

}
