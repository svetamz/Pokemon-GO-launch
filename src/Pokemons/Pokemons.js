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
                            id={selectedPokemon.id}
                            name={selectedPokemon.name}
                            image={selectedPokemon.sprites.front_default}
                            types={selectedPokemon.types.map((type) => type.type.name)}
                            details={{
                                Attack: selectedPokemon.stats[0].base_stat,
                                Defense: selectedPokemon.stats[1].base_stat,
                                HP: selectedPokemon.stats[2].base_stat,
                                "SP Attack": selectedPokemon.stats[3].base_stat,
                                "SP Defence": selectedPokemon.stats[4].base_stat,
                                Speed: selectedPokemon.stats[5].base_stat,
                                Weight: selectedPokemon.weight,
                                "Total moves": selectedPokemon.moves.length,
                            }}
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