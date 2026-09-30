console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = Number(event.target.elements.numberA.value);
  const numberB = Number(event.target.elements.numberB.value);
  const operator = event.target.elements.operator.value;

  if (operator === "addition") {
    result = add(numberA, numberB);
  }

  if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  }

  if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  }

  if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
