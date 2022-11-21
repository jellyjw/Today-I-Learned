const Bee = require("./Bee");

class ForagerBee extends Bee {
  constructor(age, job, color, food, canFly, treasureChest) {
    super(color, food);
    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }

  eat() {
    return super.eat();
  }

  forage(e) {
    this.treasureChest.push(e);
  }
}

module.exports = ForagerBee;
