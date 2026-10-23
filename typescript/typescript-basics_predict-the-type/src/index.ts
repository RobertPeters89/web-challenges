// Step 1: Predict the type of each variable below. Write your prediction into the comment,
// THEN hover over the variable in your editor and compare. Mark every wrong prediction with ❌ and think about why.

let city = "Berlin"; // Prediction: string
let population = 3_700_000; // Prediction: number
let isCapital = true; // Prediction: boolean
const hobbies = ["climbing", "reading"]; // Prediction: string[]
const grades = [1, 3, 2]; // Prediction: number[]
const student = { name: "Max", age: 22 }; // Prediction: {name: string; age: number}

// Step 2: TypeScript also infers types for values that are calculated from other variables. Predict these as well.

const firstHobby = hobbies[0]; // Prediction: string
const gradeCount = grades.length; // Prediction: number
const shout = city.toUpperCase(); // Prediction: string

// Step 3: These two lines look almost the same. Predict their types, then hover. Why are they different?

const language = "TypeScript"; // Prediction: Literal-Typ
let framework = "React"; // Prediction: string

// Step 4: This array may surprise you. Predict its type, then hover.
// Don't worry about the `|` yet: you will learn its name in the next session.

const mixed = [1, "two", 3]; // Prediction: (string | number[])

// Step 5: Which of these lines cause an error? Write "error" or "ok" behind each line.
// Then remove the `//` of one line after the other and check your prediction. Read every error message.
// Comment the line out again afterwards.

// city = 42; // Prediction: Error
// city = "Hamburg"; // Prediction: ok
// hobbies.push(3); // Prediction: Error
// grades[0] = "A"; // Prediction: Error
// student.age = "23"; // Prediction: Error
// student.email = "max@example.com"; // Prediction: Error
// language = "JavaScript"; // Prediction: Error
// framework = "Vue"; // Prediction: ok
// mixed.push(true); // Prediction: Error

// Step 6: Create an empty array `tags` that may only hold strings.
// Make sure that `tags.push(1)` is an error. Remove the line again afterwards.
const tags: string[] = [];
tags.push(1);

// Question: Compared to `hobbies`, which part of the code did you have to add for `tags`? Why can't TypeScript infer it here?
// Answer: Bei hobbies erkennt TypeScript automatisch, dass die Elemente Texte (Strings) sind. Deshalb weiß TypeScript, dass es sich um ein Array von Strings (string[]) handelt.
//Bei einem leeren Array [] ist das anders. Es gibt keine Elemente, an denen TypeScript erkennen kann, welcher Datentyp verwendet werden soll. Deshalb muss man den Typ selbst angeben, zum Beispiel mit string[].

// Question: When can you leave out a type annotation, and when do you need one?
// Answer: Weglassen kann man sie, wenn direkt ein Wert zugewiesen wird, aus dem TypeScript
// den passenden Typ ableiten kann (z. B. "let city = "Berlin").
// Nötig ist sie, wenn es keinen Anfangswert gibt (`let x: number;`), bei leeren
// Arrays/Objekten ("string[] = []"), wenn der abgeleitete Typ zu eng oder zu weit
// wäre, sowie bei Funktionsparametern (diese werden nicht abgeleitet).
