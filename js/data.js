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

setInterval(function(){ minSpeed += 0.01; }, 1500);

let score = 0;

let scoreDisplay = document.getElementById('score');
scoreDisplay.innerText = score;
scoreDisplay.style.zIndex = 5000;
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.left = 20;
scoreDisplay.style.top = 20;
scoreDisplay.style.color = 'white';
scoreDisplay.style.font = 'bold 30px Impact';
document.querySelector('#score').appendChild(scoreDisplay);

