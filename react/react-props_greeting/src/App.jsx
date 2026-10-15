export default function App() {
  return <Greeting name="Bernhard" />;
}

function Greeting({ name }) {
  const coaches = ["Feline", "Jakob", "Klaus", "Martin"];
  const isName = coaches.includes(name);

  return <h1>{isName ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
