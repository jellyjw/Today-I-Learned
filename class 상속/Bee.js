const Grub = require("./Grub");

class Bee extends Grub {
  constructor(age, color, food, job) {
    super(food);
    this.color = "yellow";
    this.age = 5;
    this.job = "Keep on growing";
  }
  eat() {
    return super.eat();
  }
}

module.exports = Bee;
