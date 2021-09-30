import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
        <button
          className="btn btn-secondary"
          onClick={this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <span style={{ fontSize: 20 }} className="badge badge-warning m-2">
          {this.formatCount()}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = 0;
    return value === 0 ? x : value;
  }
}

export default Counter;
