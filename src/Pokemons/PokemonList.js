import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import LoadMoreButton from './LoadMoreButton';
import { styled } from 'styled-components';
import { fetchPokemonList, fetchPokemonDetails, loadMorePokemon, getAllPokemonTypes, fetchFilteredPokemonList } from '../API/Api';
import PokemonFilter from './PokemonFilter';

const PokemonList = ({ setSelectedPokemon }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12');
    const [allPokemonTypes, setAllPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    const handlePokemonClick = async (id) => {
        const selectedPokemon = await fetchPokemonDetails(id);
        setSelectedPokemon(selectedPokemon);
    };

    const handleLoadMore = async () => {
        const { newPokemonList, nextUrl: newNextUrl } = await loadMorePokemon(nextUrl);
        setNextUrl(newNextUrl);
        setPokemonList(prevList => [...prevList, ...newPokemonList]);
    };

    useEffect(() => {
        async function fetchInitialPokemonList() {
            const { newPokemonList, nextUrl: newNextUrl } = await fetchPokemonList(nextUrl);
            setPokemonList(newPokemonList);
            setNextUrl(newNextUrl);
        }

        async function fetchAllTypes() {
            const types = await getAllPokemonTypes();
            setAllPokemonTypes(types);
        }

        fetchInitialPokemonList();
        fetchAllTypes();
    }, []);

    const handleTypeChange = async (e) => {
        const type = e.target.value;
        setSelectedType(type);

        try {
            const filteredList = await fetchFilteredPokemonList(type);
            setPokemonList(filteredList);
        } catch (error) {
            console.error('Error fetching filtered Pokémon list:', error);
            setPokemonList([]);
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PokemonFilter
                allPokemonTypes={allPokemonTypes}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                handleTypeChange={handleTypeChange}
            />
            <Grid>
                {pokemonList.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        image={pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : null}
                        name={pokemon.name}
                        types={pokemon.types}
                        onClick={handlePokemonClick}
                    />
                ))}
            </Grid>
            <LoadMoreButton onClick={handleLoadMore} />
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
