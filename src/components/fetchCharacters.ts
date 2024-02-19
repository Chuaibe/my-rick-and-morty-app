import axios from 'axios';

// Fonction pour récupérer les personnages depuis l'API Rick and Morty
async function fetchCharacters() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    // Renvoie les données des personnages si la requête réussit
    return response.data;
  } catch (error) {
    // Gère les erreurs en cas d'échec de la requête
    console.error('Error fetching characters:', error);
    return null;
  }
}

export default fetchCharacters;