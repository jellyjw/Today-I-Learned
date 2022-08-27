// 배열에서 this 키워드 사용해보기

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    return console.log("EGG"), (this.eggCount += 1);
  },
};

console.log(hen.name);
console.log(hen.eggCount);
hen.layAnEgg();
hen.layAnEgg();
console.log(hen.eggCount);

//push, pop 사용

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
