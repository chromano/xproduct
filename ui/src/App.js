import React, { Component } from 'react';
import { Provider } from 'react-redux'

import configureStore from './configureStore';
import CalculationHistory from './vectors/CalculationHistory';
import CrossProductForm from './vectors/CrossProductForm';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Vector cross product</h1>
          <h2>New calculation</h2>
          <CrossProductForm/>
          <h2>Calculation history</h2>
          <CalculationHistory/>
        </div>
      </Provider>
    );
  }
}

export default App;
