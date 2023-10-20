import React from 'react';
import { styled } from 'styled-components';
const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadButton onClick={onClick}>
      Load More
    </LoadButton>
  );
}

export default LoadMoreButton;

const LoadButton= styled.div`
display: flex;
justify-content: center;
align-items:center;
width: 100%;
height:40px;
background-color: #2196F3;
border-radius: 10px;
margin-top:40px;
color: white;
cursor: pointer;
&:hover{
  background-color: #a6d1f4;
}
`