

function addApple(x,y) {
  GAME.apples.push(new Apple(x,y));
}

function Apple(x,y) {
  //x- and y-coordinates of an individual acorn
  this.x=x;
  this.y=y;
}

//Initial timer before acorns start spawning
var appleAddTimer=200;

function animateApples() {

  if(appleAddTimer==0) {
    addApple(Math.random()*GAME.canvas.width, 0);
    //Time before next acorn should be added
    appleAddTimer=130;
  }
  appleAddTimer--;

  //Moves the acorns down the screen at speed 3, as if the player is moving up
  for(var i = 0; i < GAME.apples.length; i++) {
    GAME.apples[i].y+=2;

    //Removes an acorn if it is off screen
    if(GAME.apples[i].y>GAME.canvas.height) {
      GAME.apples.splice(i, 1);
      i--;
    }
  }
}

function RenderApples(context) {
  //Temporary Rectangle Apple Sprite
  context.fillStyle='red';
  for(var i = 0; i < GAME.apples.length; i++) {
    context.fillRect(GAME.apples[i].x,GAME.apples[i].y, 20, 20);
  }
}
