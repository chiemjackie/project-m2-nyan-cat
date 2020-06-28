class Chicken {
  constructor(theRoot, chickenSpot) {
    this.root = theRoot;
    this.spot = chickenSpot;

    this.x = chickenSpot * CHICKEN_WIDTH;

    this.y = -CHICKEN_HEIGHT;
    this.destroyed = false;

    this.domElement = document.createElement('img');

    this.domElement.src = './assets/chicken.png';
    this.domElement.style.position = 'absolute';
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.height = CHICKEN_HEIGHT;
    this.domElement.style.width = CHICKEN_WIDTH;
    this.domElement.style.zIndex = 4;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 5 + minSpeed;
  }

  destroy () {
    let sound = new Audio('/assets/cluck.mp3');
    sound.currentTime = 0;
    sound.volume = 0.05;
    sound.play();
    this.root.removeChild(this.domElement);
    this.destroyed = true;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);

      this.destroyed = true;
    }
  }
}