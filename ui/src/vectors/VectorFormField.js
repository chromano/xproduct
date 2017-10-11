import React, { Component } from 'react';
import './VectorFormField.css';

class VectorFormField extends Component {
  constructor(props) {
    super(props);
    this.state = {i: null, j: null, k: null};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      if (this.props.onChange) {
        if (this.state.i && this.state.j && this.state.k) {
          const value = [+this.state.i, +this.state.j, +this.state.k];
          this.props.onChange({name: this.props.name, value: value});
        } else {
          this.props.onChange({name: this.props.name, value: null});
        }
      }
    });
  }

  render() {
    return (
      <div className="vector">
        <span>[</span>
        <input name="i" type="number" value={this.state.i || ''}
          onChange={this.handleChange}/>
        <span>,</span>
        <input name="j" type="number" value={this.state.j || ''}
          onChange={this.handleChange}/>
        <span>,</span>
        <input name="k" type="number" value={this.state.k || ''}
          onChange={this.handleChange}/>
        <span>]</span>
      </div>
    );
  }
}

export default VectorFormField;
