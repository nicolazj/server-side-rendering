import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.inc = this.inc.bind(this);
  }
  inc() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        This is Home
        <p> {count}</p>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
