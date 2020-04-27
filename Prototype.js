class Monster {
  clone() {}
}

class Ghost extends Monster {
  constructor(health, speed) {
    super();
    this.health = health;
    this.speed = speed;
  }

  clone() {
      return new Ghost(this.health, this.speed);
  }
}

class Spawner {
  constructor(prototype) {
    this.prototype = prototype;
  }

  spawnMonster() {
    return this.prototype.clone();
  }
}

console.log('===== Prototype =====')

const weakGhost = new Ghost(2, 5);
const strongGhost = new Ghost(50, 100);

const hauntedHouse = [weakGhost, weakGhost, strongGhost];

hauntedHouse.forEach((monster) => {
  const monsterSpawner = new Spawner(monster);
  console.log(monsterSpawner.spawnMonster());
})