var GAME = {
  canvas : {
    width : 480,
    height : 640
  },
  started : true,
  level : 1,
  //Whether or not the game is multiplayer or 1 Player
  player2 : false,
  //Whether or not the game is transitioning between levels
  trans : false,
  platforms : [],
  players : [],
  //Collectibles that disappear when they collide with the player
  apples : [],
  //Obstacles that damage the character
  acorns : []
};
