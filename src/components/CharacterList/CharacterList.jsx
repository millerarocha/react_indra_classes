// src/components/CharacterList/CharacterList.jsx
import CharacterCard from "../CharacterCard/CharacterCard";
import { useCharacter } from "../../hooks/useCharacter";
import "./CharacterList.css";

export default function CharacterList() {
  const { characters, loading, error } = useCharacter();

  if (loading) {
    return (
      <div className="status-container">
        <span className="loader"></span>
        <p>Cargando información interdimensional...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <div className="error-message">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
