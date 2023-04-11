import React from 'react';
import Character from "../character/character";


const Characters = (props) => {

    let characters = props.item2;
    return (
        <div>
            {
                characters.map((value, index) => (<Character item={value} key={index}/>))
            }
        </div>
    );
};

export default Characters;