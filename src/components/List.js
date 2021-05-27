import React, { Component } from "react";

class List extends Component {
  render() {
    const fruitItems = this.props.fruits.map((fruits, idx) => {
      return <li key={idx}>{fruits}</li>;
    });
    return (
      <ul>
        {/* list of fruits here */}
        {fruitItems}
      </ul>
    );
  }
}

export default List;
