import React from 'react';

const Simpson = ({item}) => {
    return (
        <div className='simpsonsBlock'>
            <div><h2>{item.name} {item.surname}</h2></div>
            <div><h4>Age - {item.age}</h4></div>
            <div><p>{item.info}</p></div>
            <div><img src={item.photo} alt=""/></div>
            
        </div>
    );
};

export default Simpson;