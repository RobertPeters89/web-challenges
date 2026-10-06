console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log("Count all Persons ", data.count);
  console.log("Data from second Person ", data.results[1]);
  console.log(
    "All Names from Page 1 ",
    data.results.map((person) => person.name),
  );
}

fetchData();
