import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const AddressInput = props => {
  return (
    <form>
      Bitcoin Address: <input type="text" name="fname" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddressInput />
      </div>
    );
  }
}

export default App;
