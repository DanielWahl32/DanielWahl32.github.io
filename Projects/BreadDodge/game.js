var isGameOver
var player;
var playerImage;
var enemy;
var enemyImage;

function preload() {
    playerImage = loadImage("https://i.imgur.com/JySZxIi.png");
    enemyImage = loadImage("https://i.imgur.com/Q9yXq0L.png");
    
}

function setup() {
    isGameOver = false
    createCanvas(250, 250);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);

}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
    
    if (enemy.overlap(player)) {
        gameOver();
    }
    background(153,170,181);
    
    if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
  player.position.x += 2;
}

if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
  player.position.x -= 2;
  }
  
  enemy.position.y = enemy.position.y +4.3;
  
  if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width-5);
  }
  drawSprites();
  }
}
  
function gameOver() {

    background(0);
  textAlign(CENTER);
  fill("white");
  text("Uh Oh! A moldy bread is a bad bread!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
  player.position.y = height-(playerImage.height/2);
  enemy.position.x = width/2;
  enemy.position.y = 0;
}
}