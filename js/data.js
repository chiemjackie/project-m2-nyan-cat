const GAME_WIDTH = 1700;
const GAME_HEIGHT = 900;

const ENEMY_WIDTH = 100;
const ENEMY_HEIGHT = 100;
const MAX_ENEMIES = 10;

const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;

const lenience = 30;

let minSpeed = 0.25;

setInterval(function(){ minSpeed += 0.01; }, 1000);