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
        <li>
          <pre>{result.origin}</pre>
        </li>
      );
    });

    return <ul>{list}</ul>;
  }
}

CalculationHistory = connect(mapStateToProps)(CalculationHistory);

export default CalculationHistory;
