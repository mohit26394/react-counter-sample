import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return <p>There are no tags available!</p>;

    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{`${index}-` + tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        {/* start - redering images via url */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* end - redering images via url */}

        <h4>{this.props.children}</h4>
        <button className="btn btn-secondary" onClick={this.handleDecrement}>
          -
        </button>
        <span style={{ fontSize: 20 }} className="badge badge-warning m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-primary" onClick={ () => this.handleIncrement(this.formatCount())}>
          +
        </button>
        
        
        {/* start - rendering lists */}
        {/* <div>
          {this.state.tags.length === 0 && <p>Please create a new tag</p>}
          {this.renderTags()}
        </div> */}
        {/* end - rendering lists */}

      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    const x = "Zero";
    return value === 0 ? x : value;
  }
}

export default Counter;
