// const person: {
//   name: string;
//   age: number;
// } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "jangjiwoo",
  age: 26,
  hobbies: ["스포츠", "캠핑", "낚시"],
  role: [2, "author"],
};

person.role = [0, "jangjiwoo"];

console.log(person.name);

let favorite: string[];
favorite = ["jangjiwoo"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

const handleChangeClick = [3, "20", true];

function add(a: number, b: number): number {
  return a + b;
}

add(3, 2);
