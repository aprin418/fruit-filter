import React, { Component } from "react";
import List from "./List";
import Input from "./Input";

class FruitContainer extends Component {
  state = {
    fruitsToDisplay: this.props.fruits,
    fruitValue: "",
  };

  handleFilterChange = (e) => {
    e.preventDefault();
    let value = e.target.value;

    const filteredFruitList = this.props.fruits.filter((fruit) => {
      if (fruit.includes(value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      fruitsToDisplay: filteredFruitList,
      fruitValue: value,
    });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.fruitValue}
          onChange={this.handleFilterChange}
        />
        <List fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitContainer;
