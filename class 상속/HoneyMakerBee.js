const Bee = require("./Bee");
// const Grub = require('./Grub');

class HoneyMakerBee extends Bee {
  constructor(color, age, job, food, honeyPot) {
    super(color, food);
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }
  eat() {
    return super.eat();
  }

  makeHoney() {
    return (this.honeyPot += 1);
  }

  giveHoney() {
    return (this.honeyPot -= 1);
  }
}

module.exports = HoneyMakerBee;
