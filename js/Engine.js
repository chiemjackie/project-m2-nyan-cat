class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.chickens = [];
    startBGM();
    addBackground(this.root);
  }  

  startGame = () => {
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextSpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      window.alert('Game over');
      return;
    }

    this.chickens.forEach((chicken) => {
      chicken.update(timeDiff);
    });

    this.chickens = this.chickens.filter((chicken) => {
      return !chicken.destroyed;
    });

    while (this.chickens.length < MAX_CHICKENS) {
      const spot = nextSpot(this.chickens);
      this.chickens.push(new Chicken(this.root, spot));
    }
    
    if (this.getPoint()) {
      score += 1;
    }

    this.updateScore();

    setTimeout(this.gameLoop, 20);
  };

  isPlayerDead = () => {
    return this.enemies.some((cat) => {
      return cat.y + ENEMY_HEIGHT - lenience > gameEngine.player.y && cat.x === gameEngine.player.x;
    });
  };

  getPoint = () => {
    return this.chickens.some((chicken) => {
      if (chicken.y + ENEMY_HEIGHT > gameEngine.player.y && chicken.x === gameEngine.player.x) {
        chicken.destroy();
        return true;
      };
    });
  };

  updateScore = () => {
    scoreDisplay.innerText = score;
  }
}