import React from 'react';
import './CharComponent.css';

const CharComp = (props) => {
    return(
        <div className="charComponent" onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    );
};

export default CharComp;