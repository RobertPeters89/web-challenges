// Step 1: Create a `string[]` called `hobbies` with at least three entries.
const hobbys: string[] = [
  "bodybuilding",
  "watching series",
  "playing video games",
];
// Step 2: Create a `number[]` called `grades`. Add another grade with `push`.
const grades: number[] = [1, 2, 3, 4, 5];
grades.push(6);
// Step 3: Try to push a string into `grades`. Read the error message, then remove the line again.
grades.push("6");
// Step 4: Create an object `student` with the typed properties
// `name: string`, `age: number`, `isStudent: boolean` and `grades: number[]`.
const student: {
  name: string;
  age: number;
  isStudent: boolean;
  grades: number[];
} = { name: "John", age: 30, isStudent: true, grades: [1, 2, 3, 4, 5, 6] };
// Step 5: Print the `name` and the `grades` of `student`.
console.log(student.name, student.grades);
// Step 6: Create an array `students` that holds at least two such student objects.
// How would you type it? Which part is annoying to write twice?
const students: {
  name: string;
  age: number;
  isStudent: boolean;
  grades: number[];
}[] = [
  { name: "John", age: 30, isStudent: true, grades: [1, 2, 3, 4, 5, 6] },
  { name: "Berta", age: 27, isStudent: true, grades: [1, 2, 3, 4, 5, 6] },
];
