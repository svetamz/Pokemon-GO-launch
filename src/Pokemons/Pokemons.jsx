import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import PokemonDetails from './PokemonDetails';
import { styled } from 'styled-components';

const Pokemons = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

  
    return (
        <PokemonPage>
            <Title>
                <h1 style={{ border: '1px solid #000000', width: '350px', padding: '10px' }}>Pokedex</h1>
            </Title>
            <Content>
                <LeftBlock>
                    <PokemonList setSelectedPokemon={setSelectedPokemon} />
                </LeftBlock>
                <RightBlock>
                    {selectedPokemon && (
                        <PokemonDetails
                            pokemon={selectedPokemon}
                            onClose={() => setSelectedPokemon(null)}
                        />
                    )}
                </RightBlock>
            </Content>
        </PokemonPage>
    )
}

export default Pokemons;

const PokemonPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  @media (max-width: 768px){
    align-items:center;
  }
`
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px;
  @media (max-width: 768px){
    width: 100vw;
    align-items: center;
    margin: 0px;
  }
`
export const RightBlock = styled(LeftBlock)`
    width: 30%;
    position: relative;
    height: 100%;
    @media (max-width: 768px){
    width: 100%;
  }
`
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px){
    flex-direction: column;
  }
`
const Title = styled.div`
  display:flex;
  justify-content: center;
  @media (max-width: 768px){
    width:100%;
  }
`