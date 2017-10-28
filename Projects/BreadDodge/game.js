var player;
function setup() {
    createCanvas(250, 250);
    player = createSprite(width/2, height -25, 50, 50);
}

function draw() {
    background(153,170,181);
    drawSprites();
    
    if (keyDown(RIGHT_ARROW) && player.position.x < width) {
  player.position.x = player.position.x + 1;
  }
  if (keyDown(LEFT_ARROW) && player.position.x > 0) {
  player.position.x = player.position.x - 1;
  }
}