import React, { Component } from 'react';
import { render } from 'react-dom';
import Banner from './Banner';
import Calculator from './Calculator';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Banner title="MyCalculator" />
        <Calculator />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
