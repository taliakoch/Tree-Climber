var playerSprite=new Image();
playerSprite.src="images/somali_pirate.png";

function InitializePlayers() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  //Adding players this way allows for an easy multiplayer implementation
  GAME.players.push(new Player());
}

function Player() {
  this.x = 240;
  this.y = 50;
  //Horizontal Speed
  this.speed = 0;
  //Jump Speed
  this.speedJ = 0;
  this.health=3;
  //Whether or not the player is on a platform
  this.grounded=false;
  //Maximum Horizontal speed
  this.MAX_SPEED = 5;
  //Maximum Vertical Speed
  this.MAX_SPEEDJ = 13;
  //Invincibility Frames Counter (Look this up if you don't know what it is)
  this.iframes=0;
}

function RenderPlayer(context) {
  //Temp Human Sprite
  //context.fillStyle='white';
  //context.fillRect(GAME.players[0].x, GAME.players[0].y, 25, -25);
  context.drawImage(playerSprite, GAME.players[0].x-40, GAME.players[0].y-120, 80, 120);
}
