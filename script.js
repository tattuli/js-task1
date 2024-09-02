// --1--

let students = ["Masho", "Elene", "Nika", "Dachi", "Nina"];
students.reverse();
console.log(students);

// --2--

let studentsWithA = students.filter((student) =>
  student.toLowerCase().includes("a")
);
console.log("Students with 'a' in their name: " + studentsWithA.join(", "));

// --3--

let persons = ["David", "Elene", "Teona", "Giorgi"];
let hasElene = persons.includes("Elene");

console.log(
  hasElene
    ? "Elene is in the persons array"
    : "Elene is not in the persons array"
);

//  --4--

let numbers = [1, 7, 35, 15, 30];
numbers.sort((a, b) => a - b);
console.log(numbers);

/*
// --5--

const user = "admin";
const passCode = "12345";

const enteredUser = prompt("Enter your username:").trim();
const enteredPassCode = prompt("Enter your password:").trim();

if (enteredUser === user && enteredPassCode === passCode) {
  console.log("Login successful. Welcome!");
} else if (enteredUser !== user && enteredPassCode !== passCode) {
  console.log("Login failed. Please try again.");
} else if (enteredUser !== user) {
  console.log("Incorrect username");
} else if (enteredPassCode !== passCode) {
  console.log("Incorrect password");
}
*/

/*
// --6--

const favoriteFruit = prompt(
  "What is your favorite fruit? (apple, banana, orange)"
)
  .toLowerCase()
  .trim();

const fruitResponses = {
  apple: "Apples are great for a quick snack!",
  banana: "Bananas are full of potassium!",
  orange: "Oranges are a great source of vitamin C!",
};

const response =
  fruitResponses[favoriteFruit] ||
  "That's an interesting choice! I don't know much about that fruit.";

console.log(response);
*/
