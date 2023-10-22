export async function getPokemonTypes(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    return data.types.map(item => item.type.name);
  }

  export const fetchPokemonList = async (url = 'https://pokeapi.co/api/v2/pokemon/?limit=12') => {
    const response = await fetch(url);
    const data = await response.json();
    const newPokemonList = await Promise.all(data.results.map((pokemon) => fetchPokemonDetails(pokemon.url)));
    return { newPokemonList, nextUrl: data.next };
  };
  
  export const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return {
      id: data.id, 
      name: data.name, 
      image: data.sprites.front_default, 
      types: data.types, 
      details: [
        {label: 'Attack', value: data.stats[0].base_stat}, 
        {label: 'Defense', value: data.stats[1].base_stat},
        {label: 'HP', value: data.stats[2].base_stat},
        {label: 'SP Attack', value: data.stats[3].base_stat},
        {label: 'SP Defence', value: data.stats[4].base_stat},
        {label: 'Speed', value: data.stats[5].base_stat},
        {label: 'Weight', value: data.weight},
        {label: 'Total moves', value: data.moves.length}
      ]}
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

  
  