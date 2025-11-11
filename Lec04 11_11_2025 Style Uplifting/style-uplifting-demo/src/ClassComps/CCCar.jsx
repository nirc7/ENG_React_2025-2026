import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    this.color = 'red'; //Field
    this.speed = this.props.speed;

    this.state = {
      speed: this.props.speed,
      engine: 3.5,
      seats: 0
    };

  }

  btnAccelerate = () => {
    // console.log(this.speed);
    // this.speed++;
    // console.log(this.speed);

    //this.state.speed = 150; //ERR!!!
    //this.setState({speed : 150});

    this.setState(prevState => ({ speed: prevState.speed + 1 }));
  }

  txtSeats = (e) => {
    this.setState({ seats: e.target.value.toUpperCase() });
  }

  render() {
    return (
      <div><br />
        Car <br />
        <div>model = {this.props.model}</div>
        <div>speed = {this.state.speed}</div>
        color = {this.color} <br />
        <button onClick={this.btnAccelerate} >Accelerate</button> <br />
        Seats: <input type="text" onChange={this.txtSeats} /> <br />
        seats = {this.state.seats}
      </div>
    );
  }
}