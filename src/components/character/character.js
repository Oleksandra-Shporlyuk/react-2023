import React from 'react';

const Character = ({item}, div = <>id:{item.id}</>, div1 = <>Status:{item.status}</>) => {
    return (
        <div className='charactersBlock'>
            <div><h2>{item.name}</h2></div>
            <div><img src={item.image} alt=""/></div>
            <div>ID: {item.id}</div>
            <div>Status: {item.status}</div>
            <div>Species: {item.species}</div>
            <div>Gender: {item.gender}</div>
            
        </div>
    );
};

export default Character;