import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

// Task 1
/* queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  console.log(searchString);

  const foundCountry = countries.find((country) =>
    country.name.toLowerCase().startsWith(searchString.toLowerCase()),
  );

  console.log(foundCountry);

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
}); */

// Task 2
queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  console.log(searchString);

  const foundCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchString.toLowerCase()),
  );

  console.log(foundCountries);

  if (foundCountries.length > 0) {
    foundCountries.forEach((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
