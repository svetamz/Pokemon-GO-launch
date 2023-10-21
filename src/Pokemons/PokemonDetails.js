import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PokemonTypes from './PokemonType/PokemonType';
import { Card, Image } from './PokemonCard';
import { AiOutlineClose } from 'react-icons/ai';

const PokemonDetails = ({ id, name, image, types, details}) => {
  const [isDetailsVisible, setisDetailsVisible]=useState(true);

  const onCloseDetails =()=>{
    setisDetailsVisible(false);
  }
  useEffect(() => {
    setisDetailsVisible(true); 
  }, [id]);

  return (
    <CardDetails isDetailsVisible={isDetailsVisible}>
      <Icon onClick={onCloseDetails}>
        <AiOutlineClose size={20}></AiOutlineClose>
      </Icon>
      <Image src={image} alt={name} />
      <CardContent>
        <PokemonTypes types={types} />
        <h2>{name} #{String(id).padStart(3, '0')}</h2>
      </CardContent>
      <DetailsContent>
        {Object.entries(details).map(([label, value]) => (
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  details: PropTypes.shape({
    HP: PropTypes.number,
    attack: PropTypes.number,
    defense: PropTypes.number,
    spattack: PropTypes.number,
    spdefence: PropTypes.number,
    speed: PropTypes.number,
    weight: PropTypes.number,
    totalmove: PropTypes.number,
  }).isRequired,
};

export default PokemonDetails;

const CardDetails = styled(Card)`
  display: ${(props) => (props.isDetailsVisible ? 'flex' : 'none')};
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