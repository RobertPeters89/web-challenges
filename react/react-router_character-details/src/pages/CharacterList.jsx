import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router";

export default function CharacterList({ characters }) {
  return (
    <>
      <h1>Characters</h1>
      <ul className="gallery">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
