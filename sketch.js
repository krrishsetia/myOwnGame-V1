var player, playerImg, player_jumping, player_running

var ground, groundImg


function preload(){
playerImg = loadImage("./Assets/tile010.png")
player_running = loadAnimation("./Assets/tile000.png", "./Assets/tile001.png", "./Assets/tile002.png", "./Assets/tile003.png", "./Assets/tile004.png", "./Assets/tile005.png", "./Assets/tile006.png", "./Assets/tile007.png", "./Assets/tile008.png", "./Assets/tile009.png");
player_jumping = loadImage("./Assets/tile011.png")
groundImg = loadImage("./Assets/Ground.png")
}

function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addAnimation("Standing", playerImg);
  player.addAnimation("Running", player_running)
  player.addAnimation("Jumping", player_jumping)
  player.scale = 0.15;

  ground = createSprite(400,220,100,100)
  ground.addImage("ground", groundImg)
  ground.scale = 0.05
}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
    player.velocityX = -4
    console.log(4)
    player.changeAnimation("Running", player_running)
    player.scale = 0.2
  }
  if (keyWentUp(LEFT_ARROW)) {
    player.velocityX = 0
    player.changeAnimation("Standing", playerImg)
    player.scale = 0.15
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 4
    console.log(4)
    player.changeAnimation("Running", player_running)
    player.scale = 0.2
  }
  if (keyWentUp(RIGHT_ARROW)) {
    player.velocityX = 0
    player.changeAnimation("Standing", playerImg)
    player.scale = 0.15
  }
  if (keyDown(UP_ARROW) && player.isTouching(ground)) {
    player.velocityY = -4
    player.changeAnimation("Jumping", player_jumping)
    player.scale = 0.8
  }
  player.velocityY = player.velocityY + 0.2
  player.collide(ground)

  drawSprites();
}