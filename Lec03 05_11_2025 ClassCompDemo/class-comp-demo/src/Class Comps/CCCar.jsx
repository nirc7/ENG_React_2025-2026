import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7;
    this.age = 50; //Fields

    this.state = {
      speed: 400
    };
  }

  btnAddSpeed = () => {
    this.state.speed = 500; //ERROR!
  }

  render() {

    this.age++;

    return (
      <div>
        props.model = {this.props.model} <br />
        props.speed = {this.props.speed} <br />
        age = {this.age} <br />
        state.speed = {this.state.speed} <br />
        <button onClick={this.btnAddSpeed}>Add Speed</button>
      </div>
    );
  }
}