import React from 'react';
import App from './App';




function handleClick (){
    console.log(App);
} 

const NumbersGen = props => (
<div className="My-num" onClick={ () => props.changefun(props.disp)} >{props.disp}</div>
); 

export default NumbersGen;