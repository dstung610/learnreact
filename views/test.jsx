import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
      
export class App extends Component {
  constructor() {
    super();
    this.state = {
      i_agree: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    this.setState({i_agree: !this.state.i_agree});
  }
     
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
     
  render() {
    return (
      <div>
        <h1>React Checkbox onChange Example - ItSolutionStuff.com</h1>
        <form onSubmit={this.handleSubmit}>
           
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.i_agree}
              onChange={this.handleChange}
            /> I Agree with this content...
          </label>
           
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}