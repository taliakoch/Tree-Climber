function addPlatform(x,y,l) {
  GAME.platforms.push(new Platform(x,y,l));
}

function Platform(x,y,l) {
  this.x=x;
  this.y=y;
  this.length=l;
}

//Time before a platform should be generated
var platAddTimer=0;
function animatePlatforms() {

  if(platAddTimer==0) {
    if(Math.random()<.5) {addPlatform(80,0, 100);}
    else{addPlatform(300,0,100);}
    platAddTimer=90;
  }
  platAddTimer--;

  //Moves the platforms down the screen at speed 2, as if the player is moving up
  for(var i = 0; i < GAME.platforms.length; i++) {
    GAME.platforms[i].y+=2;

    if(GAME.platforms[i].y>GAME.canvas.height) {
      GAME.platforms.splice(i, 1);
      i--;
    }
  }
}

function RenderPlatforms(context) {
  //Temporary Platform Sprite
  context.fillStyle='green';
  for(var i = 0; i < GAME.platforms.length; i++) {
    context.fillRect(GAME.platforms[i].x,GAME.platforms[i].y, GAME.platforms[i].length, 10);
  }
}
