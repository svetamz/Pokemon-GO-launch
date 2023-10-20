import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonType/PokemonType';


const PokemonCard = ({ id, name, image, types, onClick }) => {
  return (
    <Card onClick={() => onClick(id)}>
      <Image src={image} alt={name} />
      <h3 style={{ margin: '5px' }}>{name}</h3>
      <TypesBlock>
        <PokemonTypes types={types} />
      </TypesBlock>
    </Card>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
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

