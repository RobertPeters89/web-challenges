console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
if (SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984");
}
const receivedPassword = "password1234";
if (receivedPassword) {
  console.log("Access denied!");
}
// Part 2: Even / Odd
const number = 7;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price = 0;
if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  price = numberOfHotdogs * 1;
} else {
  price = numberOfHotdogs * 0.1;
}

console.log(price);
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour <= 17 ? "Still need to learn" : "Partytime";

console.log(statement);

// Part 5: Greeting
const userName = "Martin";

const greeting = "Hello " + (userName === "Martin" ? "Coach" : userName) + "!";

console.log(greeting);
