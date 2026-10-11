/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

/* export const getNameAndCountry = ({ name, country }) => [name, country];

export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
}; */


export function getNameAndCountry(city) {
  return [city.name, city. country];
}

export const getRelocatedCity = (city1, city2) => {
  if (city2.name === undefined) {
    city2 = {name: "Berlin", country: "Germany"};
  }

  return {
    name: city1.name,
    country: city2.country
  };
}