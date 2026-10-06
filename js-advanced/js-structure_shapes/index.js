console.clear();

import { Circle } from "./components/Circle/circle.js";
import { Square } from "./components/Square/square.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";

const root = document.getElementById("root");

const circle = Circle();
const square = Square();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
