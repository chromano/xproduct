import React, { Component } from 'react';
import { Provider } from 'react-redux'

import configureStore from './configureStore';
import CrossProductForm from './vectors/CrossProductForm';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CrossProductForm/>
        </div>
      </Provider>
    );
  }
}

export default App;
