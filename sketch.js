var player,enemy1,enemy2,enemy3,bullet,background,sound;
var playerImage,enemyImage,bulletImage,backgroundImage,restartImage;

function preload(){
  sound=loadSound("sound.mp3");
  playerImage=loadImage("Images/Player.png");
  enemyImage=loadImage("Images/Enemy.png");
  bulletImage=loadImage("Images/Bullet.png");
  backgroundImage=loadImage("Images/Background.png");
  restartImage=loadImage("Images/Restart.png");
}

function setup(){
  background=createSprite(0,0);
  background.addImage(backgroundImage);
  background.scale=4;
  player= createSprite(190,windowHeight-50,10,10);
  player.addImage(playerImage);
  player.scale=1.00;
  enemy1=createSprite(100,125,10,10);
  enemy1.addImage(enemyImage);
  enemy1.scale=0.6;
  enemy2=createSprite(200,100,10,10);
  enemy2.addImage(enemyImage);
  enemy2.scale=0.6;
  enemy3=createSprite(300,150,10,10);
  enemy3.addImage(enemyImage);
  enemy3.scale=0.6;
  bullet=createSprite(0,350,10,10);
  bullet.addImage(bulletImage);
  bullet.scale=0.1;
  bullet.visible=false;
  
}
function draw() {
  createCanvas(windowWidth,windowHeight);
  //background("black");
  if (keyDown("Ctrl")) {
      bullet.velocityY=-15;
      bullet.x=player.x;
      bullet.visible=true;
  }
  if (bullet.y<0) {
      bullet.y=350;
      bullet.velocityY=0;
      bullet.visible=false;
  }
  if (bullet.isTouching(enemy1)) {
      enemy1.destroy();
      bullet.y=350;
      bullet.velocityY=0;
      bullet.visible=false;
      sound.play();
  }
  if (bullet.isTouching(enemy2)) {
      enemy2.destroy();
      bullet.y=350;
      bullet.velocityY=0;
      bullet.visible=false;
      sound.play();
  }
  if (bullet.isTouching(enemy3)) {
      enemy3.destroy();
      bullet.y=350;
      bullet.velocityY=0;
      bullet.visible=false;
      sound.play();
  }
  
  player.x=World.mouseX;
  drawSprites();

}