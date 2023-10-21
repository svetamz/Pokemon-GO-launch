export async function getPokemonTypes(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    return data.types.map(item => item.type.name);
  }

  export const fetchPokemonList = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const newPokemonList = await Promise.all(data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      const types = await getPokemonTypes(data.id);
      return { ...data, types };
    }));
    return { newPokemonList, nextUrl: data.next };
  };
  
  export const fetchPokemonDetails = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
  };
  
  export const loadMorePokemon = async (nextUrl) => {
    const response = await fetch(nextUrl);
    const data = await response.json();
    const newPokemonList = await Promise.all(data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      const types = await getPokemonTypes(data.id);
      return { ...data, types };
    }));
    return { newPokemonList, nextUrl: data.next };
  };

  export const getAllPokemonTypes = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      return data.results.map((type) => type.name);
    } catch (error) {
      console.error('Error fetching Pokemon types:', error);
    }
  };

  export const fetchFilteredPokemonList = async (selectedType) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
      const data = await response.json();
      return data.pokemon.map((entry) => entry.pokemon);
    } catch (error) {
      console.error('Error fetching filtered Pokémon list:', error);
      return [];
    }
  };
  