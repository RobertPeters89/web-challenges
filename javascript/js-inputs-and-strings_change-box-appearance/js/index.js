console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", (event) => {
  const hue = event.target.value;
  box.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
});

inputRadius.addEventListener("input", (event) => {
  const radius = event.target.value;
  if (radius === event.target.value.max) {
    box.style.borderRadius = "50%";
  } else {
    box.style.borderRadius = radius + "%";
  }
});

inputRotation.addEventListener("input", (event) => {
  const angle = event.target.value;
  box.style.transform = "rotate(" + event.target.value + "deg)";
});
