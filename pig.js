class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.visibility = 255
    this.image = loadImage("sprites/enemy.png")
    this.damageLevel = 0

  }
  display() {
    if (this.body.speed < 3) {
      //visible on the screen
      super.display()

    }
    else {
      //disappear from the screen
      if (this.damageLevel === 0 && this.body.speed > 3) {
        this.image = loadImage("sprites/enemyDamaged.png")
        this.damageLevel = 1
      }
      else if (this.damageLevel === 1 && this.body.speed > 3) {
        this.image = loadImage("sprites/enemyCritical.png")
        this.damageLevel = 2
      }
      else {
        push()
        var pos = this.body.position
        this.visibility = this.visibility - 5
        World.remove(world, this.body);
        tint(255, this.visibility);

        image(this.image, pos.x, pos.y, 50, 50)
        pop()
      }
    }

  }
};
