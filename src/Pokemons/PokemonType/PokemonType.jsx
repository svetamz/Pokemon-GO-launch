import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';
import './PokemonType.css';
import { styled } from 'styled-components';

const PokemonTypes = ({ types }) => {
  return (
    <Types className="pokemon-types">
      {types?.map((type) => (
        <Chip 
          key={type?.type?.name}
          className={type?.type?.name}
          label={type?.type?.name}
          style={{width:'80px', marginBottom:'10px'}}
        />
      ))}
    </Types>
  );
};

PokemonTypes.propTypes = {
  types: PropTypes.array.isRequired,
};

export default PokemonTypes;

const Types = styled.div`
display:flex;
flex-direction:row;
`
