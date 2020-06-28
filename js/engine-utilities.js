const nextSpot = (droppers) => {
  const spots = GAME_WIDTH / ENEMY_WIDTH;

  const spotsTaken = [];
  droppers.forEach((dropper) => {
    spotsTaken[dropper.spot] = true;
  });

  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * spots);
  }

  return candidate;
};

const addBackground = (root) => {
  const bg = document.createElement('img');

  bg.src = 'assets/tavern.jpg';
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;

  root.append(bg);

  const whiteBox = document.createElement('div');

  whiteBox.style.zIndex = 100;
  whiteBox.style.position = 'absolute';
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = '#fff';
  root.append(whiteBox);
};

const startBGM = () => {
  let sound = new Audio('/assets/gametheme.mp3');
  sound.currentTime = 0;
  sound.loop = true;
  sound.volume = 0.05;
  sound.play();
}