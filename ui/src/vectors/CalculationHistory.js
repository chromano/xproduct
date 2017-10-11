import React, { Component } from 'react';
import { connect } from 'react-redux'

import './CalculationHistory.css';

const mapStateToProps = (state, props) => {
  return {
    history: state.history
  }
};

class CalculationHistory extends Component {
  render() {
    const list = this.props.history.list.map(result => {
      return (
        <li key={result.id}>
          <pre>{result.created} - [{result.vector1.join(',')}] &times; [{result.vector2.join(',')}] = [{result.result.join(',')}]</pre>
        </li>
      );
    });

    return <ul>{list}</ul>;
  }
}

CalculationHistory = connect(mapStateToProps)(CalculationHistory);

export default CalculationHistory;
