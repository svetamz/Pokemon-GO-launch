import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import LoadMoreButton from './LoadMoreButton';
import { styled } from 'styled-components';
import { fetchPokemonList, getAllPokemonTypes } from '../API/Api';
import PokemonFilter from './PokemonFilter';


const PokemonList = ({ setSelectedPokemon }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState();
    const [allPokemonTypes, setAllPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState();

    const handlePokemonClick = async (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const fetchPokemons = async () => {
        const { newPokemonList, nextUrl: newNextUrl } = await fetchPokemonList(nextUrl);
        setNextUrl(newNextUrl);
        setPokemonList(prevList => [...prevList, ...newPokemonList]);
    };

    const fetchAllTypes = async () => {
        const types = await getAllPokemonTypes();
        setAllPokemonTypes(types);
    }

    useEffect(() => {
        fetchPokemons();
        fetchAllTypes();
    }, []);

    const filteredPokemonList = pokemonList.filter((pokemon) => {
        if (selectedType) 
        return pokemon.types.some(type => type.type.name === selectedType);       
         else {
            return true;
        }
      })
      
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PokemonFilter
                allPokemonTypes={allPokemonTypes}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Grid>
                {filteredPokemonList.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handlePokemonClick(pokemon)}
                    />
                ))}
            </Grid>
            <LoadMoreButton onClick={fetchPokemons} />
        </div>
    )
}

export default PokemonList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  `
