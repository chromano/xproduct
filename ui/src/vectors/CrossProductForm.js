import React, { Component } from 'react';
import { connect } from 'react-redux'

import './CrossProductForm.css';
import VectorFormField from './VectorFormField';
import { calcCrossProduct, inputVector } from './actions';

const mapStateToProps = (state, props) => {
  return {
    inputs: state.inputs,
    calculation: state.calculation
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCalculate: () => dispatch(calcCrossProduct()),
    onChange: (id, value) => dispatch(inputVector(id, value))
  };
};

class CrossProductForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange && this.props.onChange(event.name, event.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCalculate && this.props.onCalculate();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <VectorFormField name="vector_a" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <VectorFormField name="vector_b" onChange={this.handleChange}/>
        </div>
        <div className="submit-row">
          <button type="submit"
            disabled={!this.props.inputs.vector_a
              || !this.props.inputs.vector_b}>
            Calculate cross product
          </button>
        </div>
        {this.props.calculation.loading ?
        <div className="loading">Loading...</div> : ''}
        {this.props.calculation.result ?
        <div className="result">= {this.props.calculation.result.origin}</div>: ''}
      </form>
    );
  }
}

CrossProductForm = connect(
  mapStateToProps, mapDispatchToProps
)(CrossProductForm);

export default CrossProductForm;
