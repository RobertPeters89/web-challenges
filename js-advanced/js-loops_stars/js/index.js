console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let stars = 1; stars <= 5; stars++) {
    const star = document.createElement("img");

    if (stars <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }

    star.addEventListener("click", () => {
      renderStars(stars);
    });

    starContainer.append(star);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(2);
