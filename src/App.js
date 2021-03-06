import React, { Component } from 'react';
import './App.css';
import QRCode from 'qrcode.react';

class App extends Component {
  constructor(props) {
    super(props);
    const { address } = localStorage;
    this.state = {
      amount: '',
      address: address ? address : ''
    };
    this.handleSubmit = e => {
      e.preventDefault();
      localStorage.setItem('address', this.state.address);
      this.setState({ amount: '', address: '' });
    };
  }
  render() {
    return (
      <div className="App">
        <QRCode
          value={`bitcoin:${this.state.address}?amount=${this.state.amount}`}
        />;
        <form onSubmit={this.handleSubmit}>
          <label>
            Bitcoin Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={e => e.preventDefault()}>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
