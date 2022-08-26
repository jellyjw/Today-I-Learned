// 화살표함수

const square = (x) => {
  return x * x;
};

square(4);
square(3);

// for문 연습
for (let i = 0; i <= people.length; i++) {
  console.log(people[i].toUpperCase());
}

//object access exercise

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(`fullAddress ${fullAddress}`);
