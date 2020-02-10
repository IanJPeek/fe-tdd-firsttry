import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.counter}</h1>
          <button className="button" onClick={this.handleClick}>
            Click Me !
          </button>
        </header>
      </div>
    );
  }
}

export default App;