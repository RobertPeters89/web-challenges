console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButoon = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

lowercaseButoon.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});
