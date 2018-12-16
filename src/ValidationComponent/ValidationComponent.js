import React from 'react';

const ValidationComponent = (props) => {
    const minLength = 5;
    let thisLength = props.length;
    let comp = null;

    if (thisLength < minLength){
        comp = (
            <div>
                <p>Not long enough</p>
            </div>
        );
    }else{
        comp = (
            <div>
                <p>Its Long enough</p>
            </div>
        );
    }
    return(
        comp
    );
};

export default ValidationComponent;
