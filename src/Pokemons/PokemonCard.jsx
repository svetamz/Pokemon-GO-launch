import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PokemonTypes from './PokemonType/PokemonType';


const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <Card onClick={() => onClick(pokemon.id)}>
      <Image src={pokemon.image} alt={pokemon.name} />
      <h3 style={{ margin: '5px' }}>{pokemon.name}</h3>
      <TypesBlock>
        {pokemon.types && <PokemonTypes types={pokemon.types} />}
      </TypesBlock>
    </Card>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.array,
  onClick: PropTypes.func,
};

export default PokemonCard;

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  border: 1px solid #000;
  align-items:center;
  padding:20px;
  max-width: 300px;
  transition: box-shadow 0.3s, background-color 0.3s; 
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  }
    @media (max-width: 768px){
      padding:5px;
      align-items:center;
  }
`
export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  object-fit: cover;
  object-position: center;
  justify-content: space-evenly;
  @media (max-width: 768px){
    max-width: 160px;
  }
`
const TypesBlock = styled.div`
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: flex-start
`

