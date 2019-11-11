
var CONTROLS = {
  p1 : {
    left : false,
    right : false,
    jump : false,
    jumpCounter : 0
  },
  p2 : {
    left : false,
    right : false,
    jump : false,
    jumpCounter : 0
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "l":
      GAME.level++;
      break;
    case "ArrowUp":
      CONTROLS.p1.jump = true;
      break;
    case "ArrowRight":
      CONTROLS.p1.right = true;
      break;
    case "ArrowLeft":
      CONTROLS.p1.left = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.p1.jump = false;
      break;
    case "ArrowRight":
      CONTROLS.p1.right = false;
      break;
    case "ArrowLeft":
      CONTROLS.p1.left = false;
      break;
    default:
      break;
  }
});
