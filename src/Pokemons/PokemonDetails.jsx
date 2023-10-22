import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PokemonTypes from './PokemonType/PokemonType';
import { Card, Image } from './PokemonCard';
import { AiOutlineClose } from 'react-icons/ai';

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <CardDetails isDetailsVisible={!!pokemon}>
      <Icon onClick={onClose}>
        <AiOutlineClose size={20}></AiOutlineClose>
      </Icon>
      <Image src={pokemon?.image} alt={pokemon?.name} />
      <CardContent>
        <PokemonTypes types={pokemon?.types} />
        <h2>{pokemon.name} #{pokemon?.id}</h2>
      </CardContent>
      <DetailsContent>
        {pokemon?.details?.map(({label, value}) => (
          <Сharacteristics key={label}>
            <Type>{label}</Type>
            <Value>{value}</Value>
          </Сharacteristics>
        ))}
      </DetailsContent>

    </CardDetails>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object
};



export default PokemonDetails;

const CardDetails = styled(Card)`
  display: ${({isDetailsVisible}) => (isDetailsVisible ? 'flex' : 'none')};
  position: sticky;
  top: 0%;
@media (max-width: 768px){
  width: 90%;
  top:10%;
  position: fixed;
  z-index: 1;
  background-color: #FFFFFF;
}
`

const Icon = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
margin: 5px;
cursor: pointer;
`
const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
`
const DetailsContent = styled(CardContent)`
align-items: center;
width:100%;
`
const Сharacteristics = styled.div`
display: flex;
flex-direction:row;
justify-content:center;
width: 100%;
`
const Type = styled(Сharacteristics)`
width:80%;
padding: 10px;
border: 1px solid #000;
`
const Value = styled(Type)`
width:20%;
border-left-style:none;
`