import React, { Component } from "react";
import './App.css';

// made/ tests run with help from https://dev.to/christopherkade/introduction-to-front-end-unit-testing-510n

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