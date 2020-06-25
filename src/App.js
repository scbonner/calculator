import React, { Component } from 'react';
import Outcome from './components/Outcome';
import NumberPad from './components/NumberPad';
import * as math from 'mathjs';
import './App.css';

class App extends Component {
  constructor() {
    super();

      this.state = {
        outcome: " "
       
      }
    }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }

    else if(button === "CE"){
      this.backspace()
    }

    else {
      this.setState({
        outcome: this.state.outcome + button
      })
    }

};


calculate = () => {
 
  try {
    this.setState({
      outcome: math.evaluate(this.state.outcome)

    });
    
  } catch (e) {
      this.setState({
        outcome: 'error'

      })

  }
  
  };
  
reset = () => {
  this.setState({
    outcome: ""

  })
};

backspace = () => {
  this.setState({
    outcome: this.state.outcome.slice(0, -1)

  })
};


render() {
  return (
    <div>
      <h1>"Super Simple Calculator"</h1>
      <h2>Designed specifically for Grandparents and their Grandchildren!</h2>
      <div className="calculator-frame">
        <Outcome outcome={this.state.outcome} />
        <NumberPad onClick={this.onClick} />
      </div>
    </div>

  );

}

}



  
//     <div c
//       className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
