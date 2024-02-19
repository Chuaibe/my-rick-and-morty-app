import React from 'react';

interface CharacterDetailsProps {
  character: any; // Définissez le type de la prop character
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  // Utilisez props.character pour accéder aux détails du personnage

  // Vérifiez d'abord si la prop character est fournie
  if (!character) {
    return <div>No character details available.</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      {/* Affichage d'autres détails du personnage ici */}
    </div>
  );
};

export default CharacterDetails;