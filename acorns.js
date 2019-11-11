var image = new Image();
image.src="images/acorn.png";



function addAcorn(x,y,l) {
  GAME.acorns.push(new Acorn(x,y));
}

function Acorn(x,y) {
  //x- and y-coordinates of an individual acorn
  this.x=x;
  this.y=y;
}

//Initial timer before acorns start spawning
var acornAddTimer=0;

function animateAcorns() {

  if(acornAddTimer==0) {
    addAcorn(Math.random()*GAME.canvas.width, 0);
    //Time before next acorn should be added
    acornAddTimer=90;
  }
  acornAddTimer--;

  //Moves the acorns down the screen at speed 3, as if the player is moving up
  for(var i = 0; i < GAME.acorns.length; i++) {
    GAME.acorns[i].y+=3;

    //Removes an acorn if it is off screen
    if(GAME.acorns[i].y>GAME.canvas.height) {
      GAME.acorns.splice(i, 1);
      i--;
    }
  }
}

function RenderAcorns(context) {
  //Temporary Rectangle Acorn Sprite
  context.fillStyle='black';
  for(var i = 0; i < GAME.acorns.length; i++) {
    //context.fillRect(GAME.acorns[i].x,GAME.acorns[i].y, 20, 20);
    context.drawImage(image, GAME.acorns[i].x,GAME.acorns[i].y, 50, 40);
  }
}
