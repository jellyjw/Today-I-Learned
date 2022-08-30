//1. map practice
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map((n) => {
  return n.first;
});

console.log(firstNames); // fullNames의 firstName만 이용해서 새로운 배열 생성

//2. arrow function practice
const greet = (str) => {
  return `Hey ${str}!`;
};

greet("Hagird"); // "Hey Hagird!"
greet("Luna"); // "Hey Luna!"

//3. filter practice
const validUserNames = (name) => {
  return name.filter((name) => {
    return name.length < 10;
  });
};

validUserNames([
  "mark",
  "staceysmom1978",
  "q29832128238983",
  "carrie98",
  "MoanaFan",
]);
