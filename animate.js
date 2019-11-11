
var timeDude=200;
function animatePlayers(){
  //This below if statement is probably unnecessary in the long run
  if(timeDude>0) {timeDude--;}
  else {
  //Moves the player character left
  if(CONTROLS.p1.left) {
    if(GAME.players[0].speed>-GAME.players[0].MAX_SPEED) {GAME.players[0].speed-=0.5;}
  }
  //Moves the player character right
  else if(CONTROLS.p1.right) {
    if(GAME.players[0].speed<GAME.players[0].MAX_SPEED) {GAME.players[0].speed+=0.5;}
  }
  else {
    if(GAME.players[0].speed>0&&GAME.players[0].speed<GAME.players[0].MAX_SPEED) {
      GAME.players[0].speed-=0.5;
    }
    else if(GAME.players[0].speed<0&&GAME.players[0].speed>-GAME.players[0].MAX_SPEED) {
      GAME.players[0].speed+=0.5;
    }
  }
  //Increments the horiztonal coordinate of the player by their vertical speed
  GAME.players[0].x+=GAME.players[0].speed;
  //Increments the vertical coordinate of the player by their vertical speed
  GAME.players[0].y-=GAME.players[0].speedJ;

  //Checks if the player is on a platform
  if(GAME.players[0].grounded) {
    if(CONTROLS.p1.jumpCounter!=0) {
      CONTROLS.p1.jumpCounter--;
    }
    //Manages the initial jump
    else if(CONTROLS.p1.jump){
      GAME.players[0].speedJ=GAME.players[0].MAX_SPEEDJ;
      GAME.players[0].grounded=false;
    }
  }
  else {
    //If the player is not grounded, they accelerate downwards
    if(GAME.players[0].speedJ>-GAME.players[0].MAX_SPEEDJ) {
      GAME.players[0].speedJ-=0.5;
    }
  }

  //Flips the player character to the other side of the screen if they go out of bounds
  if(GAME.players[0].x>GAME.canvas.width) {GAME.players[0].x=0;}
  else if(GAME.players[0].x<0) {GAME.players[0].x=GAME.canvas.width;}

  checkGrounded();

  //If the player character falls below the screen, it is Game Over.
  if(GAME.players[0].y>GAME.canvas.height) {GAME.started=false;}
  }
}



/*

*/
function checkGrounded() {


  if(GAME.players[0].grounded) {
    GAME.players[0].y+=2;

    for(var i=0; i<GAME.platforms.length; i++) {
      //Checks if 
      playerInX=(GAME.players[0].x>GAME.platforms[i].x&&GAME.players[0].x<GAME.platforms[i].x+GAME.platforms[i].length);

      if((!playerInX) && Math.abs(GAME.players[0].y-GAME.platforms[i].y)<10) {
          GAME.players[0].grounded=false;
          GAME.players[0].y+=2;
          GAME.players.speedJ=-2;
          return;
      }
    }

    return;
  }
  else if(!GAME.players[0].grounded){
      for(var i=0; i<GAME.platforms.length; i++) {
        playerInY=(GAME.players[0].y>GAME.platforms[i].y&&GAME.players[0].y<GAME.platforms[i].y+10);
        playerInX=(GAME.players[0].x>GAME.platforms[i].x&&GAME.players[0].x<GAME.platforms[i].x+GAME.platforms[i].length);

        if(playerInY&&playerInX&&GAME.players[0].speedJ<0.2) {
          GAME.players[0].y=GAME.platforms[i].y;
          GAME.players[0].grounded=true;
          GAME.players[0].speedJ=0;
        }
    }
    return;
}
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if(GAME.started) {
    if(GAME.trans) {

    }
    else if (GAME.level==0) {
      context.fillStyle='black';
      context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);

    }
    else if(GAME.level==1) {
      animatePlatforms();
      animateApples();
      animateAcorns();
      animatePlayers();


      context.fillStyle='rgb(132, 198, 224)';
      context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
      context.fillStyle='rgb(128, 62, 4)';
      context.fillRect(180,0,120,GAME.canvas.height);

      RenderPlatforms(context);
      RenderApples(context);
      RenderAcorns(context);
      RenderPlayer(context);

    }
    else if(GAME.level==2) {

    }
    else if(GAME.level==3) {

    }
    else if(GAME.level==4) {

    }
    else {}
  }
  else {
    context.fillStyle='black';
    context.fillRect(0,0,480,640);
    context.fillStyle='white';
    context.font = "30px Arial";
    context.fillText("You suck.", 135, 200);
    context.fillText("Try harder.", 135, 300);
    context.fillText("College is just a dream for you.", 10, 400);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
