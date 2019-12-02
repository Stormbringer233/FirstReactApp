/**
 * @author : Michael
 * @description : A pure composant react with CSS
 */

import React from 'react';
import './PureCompo.css';

export function PureCompo(){
    return (
        <div>
            <h2 className = "h2-style">Premier composant pure en type H2</h2>
        </div>
    );
}

export function PureCompoProps({label = "à définir", age = 44}){
    const LABEL = label;
    const AGE = age;
    let newAgeLabel = "";
    if (AGE < 45){
        newAgeLabel = "trop cool";
    } else {
        newAgeLabel = "pas mal !";
    }
    return(
        <div>
            <h2 className = "h2-styleCompo">Pure Compo props {label} avec un age {newAgeLabel}</h2>
        </div>
    );
}

//export default PureCompo;