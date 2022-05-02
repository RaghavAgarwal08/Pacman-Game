var pacman , pacRightAnimation
var bgImg

var ghost1,  ghost2;
var ghostImg;

var wall1, wall2, wall3,wall4, wall5, wall6, wall7, wall8, wall9, wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall51,wall52,wall53,wall54, wall55,wall56, wall57, wall58, wall59, wall60;
var title, textImg
var ghost2, ghost2Img
var coin, coinImg;
var pacLeftAnimation;
var pacUpAnimation
var pacDownAnimation
var gameOver, gameOverImg;
var ghost4, ghost4Img;
var mute, muteImg;
var muteCount = 0;
var rand1,rand2;
var score = 0;
rand1arr = [ 100,200,300,400,500,600,700]
rand2arr = [ 100,200,300,400,500,600,700]
var intMusic;
var berryImg;
var coin1, coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin17,coin18,coin19,coin20,coin21,coin22,coin23,
coin24,coin25,coin26,coin27,coin28,coin29,coin30,coin31,coin32,coin33,coin34,coin35,coin36,coin37,coin38,coin39,coin40,coin41,coin42,
coin43,coin44,coin45,coin46,coin47,coin48,coin49;
var coinGroup 
var chompMusic;
var deathMusic;
var lifeCount =3
function preload(){
  //loading images
 pacRightAnimation = loadAnimation("pac.png", "pacRight.png", "pac.png");
 pacUpAnimation = loadAnimation("pacUp.png", "pac.png", "pacUp.png");
 pacDownAnimation = loadAnimation("pacDown.png", "pac.png", "pacDown.png");
 pacLeftAnimation = loadAnimation("pacLeft.png", "pac.png", "pacLeft.png");
  bgImg = loadImage("maze.png");
  ghostImg = loadImage("ghost.png");
  textImg = loadImage("text.png")
  coinImg = loadImage("coin.png");
  ghost2Img = loadImage("ghost2.png");
  ghost3Img = loadImage("ghost3.png");
  intMusic = loadSound("introMusic.wav");
  gameOverImg = loadImage("gameOver.jpg");
  ghost4Img = loadImage("ghost4.png");
  muteImg = loadImage("mute.png");
  chompMusic = loadSound("pacman_chomp.wav")
  deathMusic = loadSound("pacman_death.wav")
  

}

function setup() {
  //creating canvas
  createCanvas(800, 800);

  intMusic.play();

//making game text


coinGroup = new Group()
title = createSprite(400,360, 100,50);
title.addImage(textImg);
title.scale=0.035



  
  //making pacman
  pacman = createSprite(50,670,40,40);
  pacman.addAnimation("right", pacRightAnimation);
  pacman.addAnimation("left", pacLeftAnimation);
  pacman.addAnimation("up", pacUpAnimation);
  pacman.addAnimation("down", pacDownAnimation);
  pacman.scale=0.03;

//making ghosts
  ghost1 = createSprite(400,430,40,40);
  ghost1.addImage(ghostImg);
  ghost1.scale=0.04;

  ghost2 = createSprite(510,200,40,40);
  ghost2.addImage(ghost2Img);
  ghost2.scale=0.06;

  ghost3 = createSprite(280,220,40,40);
  ghost3.addImage(ghost3Img);
  ghost3.scale=0.13;

  ghost4 = createSprite(700,500,40,40);
  ghost4.addImage(ghost4Img);
  ghost4.scale=0.07;

 mute= createImg("mute.png")
 mute.position(750,50);
 mute.size(40,40);
 mute.mouseClicked(mute_ftn);


 coin = createSprite(300,220,20,20);
 coin .addImage(coinImg)
 coin.scale =0.03
//making coins

coin1 = createSprite(50, 720, 20,20)
coin1.addImage(coinImg);
coin1.scale=0.03;
//coinGroup.add(coin1)
coin2 = createSprite(100, 720, 20,20)
coin2.addImage(coinImg);
coin2.scale=0.03;
//coinGroup.add(coin12)
coin3 = createSprite(150, 720, 20,20)
coin3.addImage(coinImg);
coin3.scale=0.03;
//coinGroup.add(coin13)
coin4 = createSprite(200, 720, 20,20)
coin4.addImage(coinImg);
coin4.scale=0.03;
//coinGroup.add(coin4)
coin5 = createSprite(250, 720, 20,20)
coin5.addImage(coinImg);
coin5.scale=0.03;
//coinGroup.add(coin5)
coin6= createSprite(300, 720, 20,20)
coin6.addImage(coinImg);
coin6.scale=0.03;
//coinGroup.add(coin6)
coin7 = createSprite(350, 720, 20,20)
coin7.addImage(coinImg);
coin7.scale=0.03;
//coinGroup.add(coin7)
coin8 = createSprite(400, 720, 20,20)
coin8.addImage(coinImg);
coin8.scale=0.03;
//coinGroup.add(coin8)
coin9 = createSprite(450, 720, 20,20)
coin9.addImage(coinImg);
coin9.scale=0.03;
//coinGroup.add(coin9)
coin10 = createSprite(500, 720, 20,20)
coin10.addImage(coinImg);
coin10.scale=0.03;
//coinGroup.add(coin10)
coin11 = createSprite(550, 720, 20,20)
coin11.addImage(coinImg);
coin11.scale=0.03;
//coinGroup.add(coin11)
coin12 = createSprite(600, 720, 20,20)
coin12.addImage(coinImg);
coin12.scale=0.03;
//coinGroup.add(coin12)
coin13 = createSprite(650, 720, 20,20)
coin13.addImage(coinImg);
coin13.scale=0.03;
//coinGroup.add(coin13)
coin14 = createSprite(700, 720, 20,20)
coin14.addImage(coinImg);
coin14.scale=0.03;
//coinGroup.add(coin14)
coin15 = createSprite(750, 720, 20,20)
coin15.addImage(coinImg);
coin15.scale=0.03;
//coinGroup.add(coin15)
coin16 = createSprite(250, 570, 20,20)
coin16.addImage(coinImg);
coin16.scale=0.03;
//coinGroup.add(coin16)
coin17 = createSprite(300, 570, 20,20)
coin17.addImage(coinImg);
coin17.scale=0.03;
//coinGroup.add(coin17)
coin18 = createSprite(350, 570, 20,20)
coin18.addImage(coinImg);
coin18.scale=0.03;
//coinGroup.add(coin18)
coin19 = createSprite(400, 570, 20,20)
coin19.addImage(coinImg);
coin19.scale=0.03;
//coinGroup.add(coin19)
coin20 = createSprite(450, 570, 20,20)
coin20.addImage(coinImg);
coin20.scale=0.03;
//coinGroup.add(coin20)
coin21 = createSprite(500, 570, 20,20)
coin21.addImage(coinImg);
coin21.scale=0.03;
//coinGroup.add(coin21)
coin22 = createSprite(550, 570, 20,20)
coin22.addImage(coinImg);
coin22.scale=0.03;
//coinGroup.add(coin22)
coin23 = createSprite(50, 360, 20,20)
coin23.addImage(coinImg);
coin23.scale=0.03;
coin24 = createSprite(100, 360, 20,20)
coin24.addImage(coinImg);
coin24.scale=0.03;
coin25 = createSprite(150, 360, 20,20)
coin25.addImage(coinImg);
coin25.scale=0.03;
coin26 = createSprite(200, 360, 20,20)
coin26.addImage(coinImg);
coin26.scale=0.03;
coin27 = createSprite(250, 360, 20,20)
coin27.addImage(coinImg);
coin27.scale=0.03;
coin28 = createSprite(550, 360, 20,20)
coin28.addImage(coinImg);
coin28.scale=0.03;
coin29 = createSprite(600, 360, 20,20)
coin29.addImage(coinImg);
coin29.scale=0.03;
coin30 = createSprite(650, 360, 20,20)
coin30.addImage(coinImg);
coin30.scale=0.03;
coin31 = createSprite(700, 360, 20,20)
coin31.addImage(coinImg);
coin31.scale=0.03;
coin32 = createSprite(750, 360, 20,20)
coin32.addImage(coinImg);
coin32.scale=0.03;
coin33 = createSprite(50, 140, 20,20)
coin33.addImage(coinImg);
coin33.scale=0.03;
coin34 = createSprite(100, 140, 20,20)
coin34.addImage(coinImg);
coin34.scale=0.03;
coin35 = createSprite(150, 140, 20,20)
coin35.addImage(coinImg);
coin35.scale=0.03;
coin36 = createSprite(200, 140, 20,20)
coin36.addImage(coinImg);
coin36.scale=0.03;
coin37 = createSprite(250, 140, 20,20)
coin37.addImage(coinImg);
coin37.scale=0.03;
coin38 = createSprite(300, 140, 20,20)
coin38.addImage(coinImg);
coin38.scale=0.03;
coin39 = createSprite(350, 140, 20,20)
coin39.addImage(coinImg);
coin39.scale=0.03;
coin40 = createSprite(400, 140, 20,20)
coin40.addImage(coinImg);
coin40.scale=0.03;
coin41 = createSprite(450, 140, 20,20)
coin41.addImage(coinImg);
coin41.scale=0.03;
coin42 = createSprite(500, 140, 20,20)
coin42.addImage(coinImg);
coin42.scale=0.03;
coin43 = createSprite(550, 140, 20,20)
coin43.addImage(coinImg);
coin43.scale=0.03;
coin44 = createSprite(600, 140, 20,20)
coin44.addImage(coinImg);
coin44.scale=0.03;
coin45 = createSprite(650, 140, 20,20)
coin45.addImage(coinImg);
coin45.scale=0.03;
coin46 = createSprite(700, 140, 20,20)
coin46.addImage(coinImg);
coin46.scale=0.03;

  //making maze walls
  wall1 = createSprite(45, 620, 80, 40);
  wall2 = createSprite(30, 620, 20, 300);
  wall3 = createSprite(90, 470, 150, 20);
  wall4 = createSprite(160, 420, 20, 100);
  wall5 = createSprite(90, 385, 120, 20);
  wall6 = createSprite(30, 360, 20,70);
  wall7 = createSprite(90, 330,130,20);
  wall8 = createSprite(400, 670, 50, 80)
  wall9 = createSprite(150, 280, 20, 100);
  wall10 = createSprite(90, 240, 150, 20);
  wall11 = createSprite(30, 130, 20,220);
  wall12= createSprite(200, 30, 350,20);
  wall13 = createSprite(400, 80, 50,90);
  wall14 = createSprite(570, 30, 370,20);
  wall15 = createSprite(770, 130, 20,220);
  wall16 = createSprite(700, 240, 150,20);
  wall17 = createSprite(630, 290, 20,100);
  wall18 = createSprite(700, 330, 150,20);
  wall19 = createSprite(700, 240, 150,20);
  wall20 = createSprite(770, 360, 20,70);
  wall21 = createSprite(700, 385, 150,20);
  wall22 = createSprite(770, 360, 20,70);
  wall23 = createSprite(700, 390, 150,20);
  wall24 = createSprite(630, 430, 20,100);
  wall25 = createSprite(700, 470, 150,20);
  wall26 = createSprite(770, 615, 20,270);
  wall27 = createSprite(400, 750, 770,30);
  wall28 = createSprite(210, 680, 260,30);
  wall29 = createSprite(150, 590, 40,90);
  wall30 = createSprite(120, 540, 80,20);
  wall31 = createSprite(235, 640, 40,70);
  wall32 = createSprite(400, 610, 200,30);
  wall33 = createSprite(590, 680, 240,20);
  wall34 = createSprite(560, 650, 40,90);
  wall35 = createSprite(734, 610, 60,20);
  wall36 = createSprite(640, 580, 40,80);
  wall37= createSprite(660, 540, 85,30);
  wall38= createSprite(560, 440, 30,95);
  wall39= createSprite(280, 540, 120,30);
  wall40= createSprite(395, 510, 30,100);
  wall41= createSprite(395, 470, 220,30);
  wall42= createSprite(230, 440, 30,90);
  wall43= createSprite(230, 250, 30,180);
  wall44= createSprite(270, 250, 110,30);
  wall45= createSprite(400, 220, 30,90);
  wall46= createSprite(400, 180, 190,30);
  wall47= createSprite(510, 250, 90,30);
  wall48= createSprite(560, 250, 30,170);
  wall49= createSprite(670, 180, 100,20);
  wall50= createSprite(670, 90, 100,50);
  wall51= createSprite(520, 90, 110,50);
  wall52= createSprite(270, 90, 110,50);
  wall53= createSprite(130, 90, 110,50);
  wall54= createSprite(130, 180, 100,20);
  wall55= createSprite(530, 540, 120,30);
  wall56= createSprite(400, 310, 201,20);
  wall57= createSprite(390, 410, 201,20);
  wall58= createSprite(300, 360, 20,120);
  wall59= createSprite(500, 360, 20,120);
  wall59= createSprite(500, 360, 20,120);
  wall60= createSprite(740,610,70,20);

//maming all walls invisible
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
wall21.visible = false;
wall22.visible = false;
wall23.visible = false;
wall24.visible = false;
wall25.visible = false;
wall26.visible = false;
wall27.visible = false;
wall28.visible = false;
wall29.visible = false;
wall30.visible = false;
wall31.visible = false;
wall32.visible = false;
wall33.visible = false;
wall34.visible = false;
wall35.visible = false;
wall36.visible = false;
wall37.visible = false;
wall38.visible = false;
wall39.visible = false;
wall40.visible = false;
wall41.visible = false;
wall42.visible = false;
wall43.visible = false;
wall44.visible = false;
wall45.visible = false;
wall46.visible = false;
wall47.visible = false;
wall49.visible = false;
wall48.visible = false;
wall50.visible = false;
wall51.visible = false;
wall52.visible = false;
wall53.visible = false;
wall54.visible = false;
wall55.visible=false;
wall56.visible=false;
wall57.visible=false;
wall58.visible=false;
wall59.visible=false;
wall60.visible=false;

//giving ghosts initial velocity
ghost1.velocityX =-4;
ghost2.velocityY=-4
ghost3.velocityX = 4;
ghost4.velocityX = 4
}

function draw() {
  background(bgImg);
  fill ("white")
  textSize(30)
text("Score: "+score, 50,30);

fill ("yrllow")
  textSize(30)
text("Life: "+lifeCount, 650,30);
  
  //making pacman move
  if(keyDown(RIGHT_ARROW)){
    pacman.x = pacman.x+6;
    pacman.changeAnimation("right")
  }
  if(keyDown(UP_ARROW)){
    pacman.y= pacman.y-6;
    pacman.changeAnimation("up")
  }
  if(keyDown(LEFT_ARROW)){
    pacman.x = pacman.x-6;
    pacman.changeAnimation("left")
  }
  if(keyDown(DOWN_ARROW)){
    pacman.y = pacman.y+6;
    pacman.changeAnimation("down")
  }
  
  //if(pacman.isTouching(ghost1)||pacman.isTouching(ghost3)||pacman.isTouching(ghost2) ){
  //  ghostTouchingPac()
  //}

 
  
  //making coins
  
  /*for(var i=20; i<=370; i+=20){
    coin = createSprite(i*2, 720, 5, 5);
  coin.addImage(coinImg);
  coin.scale = 0.02;
  }
  for(var i=590; i<=720; i+=20){
    coin = createSprite(750, i+20, 5, 5);
  coin.addImage(coinImg);
  coin.scale = 0.02;
  }*/

  //making pacman stay inside the maze by colliding with walls
 pacman.collide(wall1)
  pacman.collide(wall2)
  pacman.collide(wall3)
  pacman.collide(wall4)
  pacman.collide(wall5)
  pacman.collide(wall6)
  pacman.collide(wall7)
  pacman.collide(wall8)
  pacman.collide(wall9)
  pacman.collide(wall10)
  pacman.collide(wall11)
  pacman.collide(wall12)
  pacman.collide(wall13)
  pacman.collide(wall14)
  pacman.collide(wall15)
  pacman.collide(wall16)
  pacman.collide(wall17)
  pacman.collide(wall18)
  pacman.collide(wall19)
  pacman.collide(wall20)
  pacman.collide(wall21)
  pacman.collide(wall22)
  pacman.collide(wall23)
  pacman.collide(wall24)
  pacman.collide(wall25)
  pacman.collide(wall26)
  pacman.collide(wall27)
  pacman.collide(wall28)
  pacman.collide(wall29)
  pacman.collide(wall30)
  pacman.collide(wall31)
  pacman.collide(wall32)
  pacman.collide(wall33)
  pacman.collide(wall34)
  pacman.collide(wall35)
  pacman.collide(wall36)
  pacman.collide(wall37)
  pacman.collide(wall38)
  pacman.collide(wall39)
  pacman.collide(wall40)
  pacman.collide(wall41)
  pacman.collide(wall42)
  pacman.collide(wall43)
  pacman.collide(wall44)
  pacman.collide(wall45)
  pacman.collide(wall46)
  pacman.collide(wall47)
  pacman.collide(wall48)
  pacman.collide(wall49)
  pacman.collide(wall50)
  pacman.collide(wall51)
  pacman.collide(wall52)
  pacman.collide(wall53)
  pacman.collide(wall54)
  pacman.collide(wall55)
  pacman.collide(wall56)
  pacman.collide(wall57)
  pacman.collide(wall58)
  pacman.collide(wall59)
  pacman.collide(wall60)
  


  ghost1Movement()
  ghost2Movement();
  ghost3Movement();
  ghost4Movement();

  // spawnCoin();

  //mute.mouseClicked(mute_ftn)
if(keyDown("A")){
  intMusic.stop();
  console.log("mute")

}
console.log(muteCount)
if(keyDown("B")){
  intMusic.loop();
  console.log("mute")

}
  rand1 =random( rand1arr)
  rand2 =random( rand1arr)
if(frameRate%500 == 0 || pacman.collide(coin)){
  coin.x = rand1
  coin.y = rand2
  score +=10;
}

  
if(pacman.isTouching(coin1)){
  coin1.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin2)){
  coin2.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin3)){
  coin3.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin4)){
  coin4.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin5)){
  coin5.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin6)){
  coin6.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin7)){
  coin7.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin8)){
  coin8.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin9)){
  coin9.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin10)){
  coin10.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin11)){
  coin11.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin12)){
  coin12.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin13)){
  coin13.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin14)){
  coin14.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin15)){
  coin15.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin16)){
  coin16.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin17)){
  coin17.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin18)){
  coin18.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin19)){
  coin19.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin20)){
  coin20.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin21)){
  coin21.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin22)){
  coin22.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin23)){
  coin23.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin24)){
  coin24.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin25)){
  coin25.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin26)){
  coin26.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin27)){
  coin27.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin28)){
  coin28.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin29)){
  coin29.destroy()
  score+=5;
  chompMusic.play()
}

if(pacman.isTouching(coin30)){
  coin30.destroy()
  score+=5;
  chompMusic.play()
}

if(pacman.isTouching(coin31)){
  coin31.destroy()
  score+=5;
  chompMusic.play()
}

if(pacman.isTouching(coin32)){
  coin32.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin33)){
  coin33.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin34)){
  coin34.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin35)){
  coin35.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin36)){
  coin36.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin37)){
  coin37.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin38)){
  coin38.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin39)){
  coin39.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin40)){
  coin40.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin41)){
  coin41.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin42)){
  coin42.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin43)){
  coin43.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin44)){
  coin44.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin45)){
  coin45.destroy()
  score+=5;
  chompMusic.play()
}
if(pacman.isTouching(coin46)){
  coin46.destroy()
  score+=5;
  chompMusic.play()
}

if(pacman.collide(ghost1)||pacman.collide(ghost2)||pacman.collide(ghost3)||pacman.collide(ghost4) ){
  ghostTouchingPac();
  deathMusic.play();
}
if(lifeCount == 0){
  gameEnd();
  
}




  drawSprites();
}

function spawnCoin(coin, coinImg){
  var r1 = random(100, 300,400,500);
  var r2 = random(100, 700, 500);
   coin =createSprite(r1,r2, 20,20);
   coin.addImage(coinImg);


  }


//making AI movement 4 the ghosts to move automatically
function ghost1Movement(){
  if(ghost1.collide(wall42)){
    
    ghost1.velocityX= 0;
    ghost1.velocityY = 4;
   
  }
  if(ghost1.collide(wall39)|| ghost1.collide(wall28)){
    ghost1.velocityX= -4;
    ghost1.velocityY = 0;
   }
   
   if(ghost1.collide(wall2)){
    ghost1.x=400
    ghost1.y=430
    ghost1.velocityX=-4;
   }
}

function ghost2Movement(){
  
  if(ghost2.collide(wall51)||ghost3.collide(wall32)){
    ghost2.velocityX=4;
    ghost2.velocityY = 0;
  }
  if(ghost2.collide(wall15)|| ghost2.collide(wall48)){
    ghost2.velocityX=0;
    ghost2.velocityY = 4;
  }
  if(ghost2.collide(wall16)){
    ghost2.velocityX=-4;
    ghost2.velocityY = 0;
  }
  if(ghost2.collide(wall33)){
    ghost2.x = 510
    ghost2.y = 200
    ghost2.velocityX=0;
    ghost2.velocityY = -4;
  }
}

function ghost3Movement(){
  if(ghost3.collide(wall45)){
    ghost3.velocityY = 4;
    ghost3.velocityX = 0;
  }
  if(ghost3.collide(wall56)){
    ghost3.velocityY = 0;
    ghost3.velocityX = -4;
  }
  if(ghost3.collide(wall43)){
    ghost3.velocityY = 4;
    ghost3.velocityX = 0;
  }
  if(ghost3.collide(wall39)){
    ghost3.velocityY = 0;
    ghost3.velocityX = 4;
  }
  if(ghost3.collide(wall40)){
    ghost3.x = 280;
    ghost3.y = 220;
    ghost3.velocityX = 4;
    ghost3.velocityY = 0;
  }
  
}

function ghost4Movement(){
  if(ghost4.collide(wall26)){
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if(ghost4.collide(wall60)){
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
  }
  if(ghost4.collide(wall36)){
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if(ghost4.collide(wall33)){
    ghost4.velocityX = 4;
    ghost4.velocityY = 0;
  }
  if(ghost4.collide(wall60)&& ghost4.collide(wall26)){
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
    console.log("chek")
  }
  if(ghost4.collide(wall27)){
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
    console.log("chek")
  }
  if(ghost4.collide(wall2)){
    ghost4.x = 700;
    ghost4.y=500;
    ghost4.velocityX = 4;
    ghost4.velocityY = 0;
    console.log("chek")
  }
}

function ghostTouchingPac(){
  lifeCount-=1;
  pacman.x = 50;
  pacman.y = 670;
  ghost1.x = 400;
  ghost1.y = 430;
  ghost1.velocityX = -4;
  ghost2.x = 510;
  ghost2.y = 200;
  ghost3.x = 280;
  ghost3.y = 220;
  ghost4.x = 700;
  ghost4.y = 500;
  ghost2.velocityY = -4;
  ghost3.velocityX = 4;
  ghost4.velocityX = 4

}
function gameEnd(){
  pacman.destroy();
  ghost1.velocityX = 0;
  ghost1.velocityY = 0;
  ghost2.velocityX = 0;
  ghost2.velocityY = 0;
  ghost3.velocityX = 0;
  ghost3.velocityY = 0;
  ghost4.velocityX = 0;
  ghost4.velocityY = 0;
  gameOver = createSprite(400,400,300, 300)
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.5
  
}

function mute_ftn(){
  muteCount=1;
  intMusic.stop();
}