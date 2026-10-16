import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offsetUrl, setOffsetUrl] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offsetUrl}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offsetUrl]);

  if (!pokemon) return null;
  console.log(pokemon);
  return (
    <main>
      <button
        type="button"
        disabled={offsetUrl <= 0}
        onClick={() => setOffsetUrl(offsetUrl - 20)}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffsetUrl(offsetUrl + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
