import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { styled } from 'styled-components';
import { fetchPokemonList, getAllPokemonTypes } from '../API/Api';
import PokemonFilter from './PokemonFilter';


const PokemonList = ({ setSelectedPokemon }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState();
    const [allPokemonTypes, setAllPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState();
    const [loading, setLoading] = useState(false);

    const handlePokemonClick = async (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const fetchPokemons = async () => {
        setLoading(true);
        const { newPokemonList, nextUrl: newNextUrl } = await fetchPokemonList(nextUrl);
        setNextUrl(newNextUrl);
        setPokemonList(prevList => [...prevList, ...newPokemonList]);
        setLoading(false);
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
            <LoadButton onClick={fetchPokemons} disabled={loading}>
                Load More
            </LoadButton>        
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
const LoadButton = styled.button`
display: flex;
justify-content: center;
align-items:center;
width: 100%;
height:40px;
background-color: #2196F3;
border-radius: 10px;
border-color: #2196F3;
margin-top:40px;
color: white;
cursor: pointer;
&:hover{
  background-color: #64b9ff;
}
`