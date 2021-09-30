import React, { Component } from "react";
import Counter from "./counterComponent";

class MultipleCounters extends Component {

  render() {
    const { onReset, onIncrement, onDecrement, onDelete } = this.props;
    console.log("this.props", this.props);
    return (
      <div className="m-5">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map((ele) => (
          <Counter
            key={ele.id}
            counter={ele}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          >
            <div className="m-2">Counter #{ele.id}</div>
          </Counter>
        ))}
      </div>
    );
  }
}

export default MultipleCounters;
