import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumbersGen from './NumbersGen';
import StarsGen from './StarsGen';

class  App extends React.Component {
    state = {
        starNumber: 9
    }

    changeStars = (value) => {
        // var numtochange = Math.floor(Math.random() * ((9 - 1) + 1));
        // console.log("Random "+numtochange);
        this.setState({starNumber: value});
        console.log("Event " +value);
    };
  
    
    
    
    render (){

    return (
        
        <div className = "container" >
        
        <div className="Right">
           {
               [...Array(this.state.starNumber).keys()].map(num => <StarsGen key={num} />)
           }

        </div>
        <div className="Left">
           {
               [...Array(9).keys()].map(num => <NumbersGen key={num} disp = {num+1} changefun = {this.changeStars} />)
           }

        </div>

    </div>

    );
    }
}  


export default App;