import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  
  const getStatusColor = (status) => {
    if (status === "Alive") return "#55cc44"; 
    if (status === "Dead") return "#d32f2f"; 
    return "#9e9e9e"; 
  };

  return (
    <div className="card-container">
      <img src={character.image} alt={`Imagen de ${character.name}`} />

      <div className="card-info">
        <h2>{character.name}</h2>

        <div className="card-details">
          <p>
            <span
              className="status-dot"
              style={{ backgroundColor: getStatusColor(character.status) }}
            ></span>
            {character.status}
          </p>
          <p>
            <strong>Especie:</strong> {character.species}
          </p>
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
