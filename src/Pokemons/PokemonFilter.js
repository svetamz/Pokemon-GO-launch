import React from 'react';

const PokemonFilter = ({ allPokemonTypes, selectedType, setSelectedType, handleTypeChange }) => {
    return (
        <select value={selectedType} onChange={(e) => {
            setSelectedType(e.target.value);
            handleTypeChange(e); 
        }} style={{width:'150px', height:'40px', padding:'10px', marginBottom:'20px'}}>
            <option value="">Choose the type</option>
            {allPokemonTypes && allPokemonTypes.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
}



export default PokemonFilter;
