
import React from 'react';

interface CharacterListItemProps {
  character?: any; // Assurez-vous que la prop character est définie comme optionnelle (?)
  onCharacterClick: (character: any) => void;
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({ character, onCharacterClick }) => {
  return (
    <div onClick={() => onCharacterClick(character)}>
      {/* Vérifiez si character est défini avant d'accéder à ses propriétés */}
      {character && (
        <>
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </>
      )}
    </div>
  );
};

export default CharacterListItem;