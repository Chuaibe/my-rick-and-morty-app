import React, { useState, useEffect } from 'react';
import fetchCharacters from './components/fetchCharacters';
import CharacterListItem from './components/CharacterListItem';
import CharacterDetails from './components/CharacterDetails';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);

  useEffect(() => {
    // Charge les personnages au montage du composant
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      if (data) {
        setCharacters(data.results);
      }
    };

    loadCharacters();
  }, []); // Exécute une seule fois lors du montage

  const onCharacterClick = (character: any) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      {characters.map((character) => (
        <CharacterListItem
          key={character.id}
          character={character}
          onCharacterClick={onCharacterClick}
        />
      ))}
      {selectedCharacter ? (
        <CharacterDetails character={selectedCharacter} />
      ) : (
        <p>No character details available.</p>
      )}
    </div>
  );
};

export default App;