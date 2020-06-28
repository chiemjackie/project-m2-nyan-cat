let sound = document.getElementById("audioId");
sound.currentTime = 0;
sound.loop = true;
sound.play();

const GAME_WIDTH = 1700;
const GAME_HEIGHT = 850;

const ENEMY_WIDTH = 100;
const ENEMY_HEIGHT = 100;
const MAX_ENEMIES = 5;

const CHICKEN_WIDTH = 100;
const CHICKEN_HEIGHT = 90;
const MAX_CHICKENS = 3;

const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;

const lenience = 30;

let minSpeed = 0.1;

setInterval(function(){ minSpeed += 0.01; }, 2000);