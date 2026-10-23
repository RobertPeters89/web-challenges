// Snippet 1
let count: number = 3;

// Snippet 2
const names: string[] = ["Anna", "Ben", "42"];

// Snippet 3
const user: { name: string; age: number; email: string } = {
  name: "Max",
  age: 30,
  email: "max@web.de",
};
console.log(user.email);

// Snippet 4
const counter = 0;
const next = counter + 1;
console.log(next);

// Question 1: Why would JavaScript not report any of these errors before running the code?
// JavaScript überprüft nicht vor dem Start, ob die Typen korrekt sind. Variablen können
// unterschiedliche Werte enthalten, ohne einen festen Typ zu haben. Fehler werden erst sichtbar,
// wenn der Code ausgeführt wird. Manche Fehler führen nicht zu einer Fehlermeldung,
// sondern zu falschen Ergebnissen. Zum Beispiel ergibt undefined + 1 den Wert NaN.

// Question 2: Which of the errors would be the hardest to find in a large JavaScript project?
// Bei Snippet 3 und 4 (undefined + 1) stürzt das Programm nicht ab. Stattdessen entstehen
// Werte wie NaN oder undefined, die im Programm weitergegeben werden. Der Fehler fällt oft
// erst später auf, zum Beispiel durch die Anzeige von NaN auf der Webseite oder ein
// fehlendes E-Mail-Feld in der Datenbank. Snippet 1 und 2 fallen dagegen schneller auf,
// weil falsche Datentypen bei Berechnungen oder beim Sortieren eher zu sichtbaren Fehlern führen.
