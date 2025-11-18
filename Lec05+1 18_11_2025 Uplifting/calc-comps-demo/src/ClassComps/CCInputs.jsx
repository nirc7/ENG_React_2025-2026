import { Component } from 'react'

export default class CCInputs extends Component {
  constructor(props) {
    super(props);


  }


  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  chgNum2 = (e) => {
    this.setState({ num2: Number(e.target.value) });
  }

  btnSum = () => {
    if (this.state === null) {
      return;
    }

    this.props.sendtResFromInputs(this.state.num1 + this.state.num2);

    //this.setState({ result: this.state.num1 + this.state.num2 });
  }

  render() {

    let radius = 10;

    return (

      <div style={{
        border: '1px solid black',
        margin: 10 * 2,
        padding: 10,
        borderRadius: radius,
        color: 'purple',
        fontFamily: 'bold',
        fontSize: 30
      }}>CCinputs <br />

        num1: <input type="number"
          placeholder="enter num1" onChange={this.chgNum1} /> <br />
        num2: <input type="text"
          placeholder="enter num2" onChange={this.chgNum2} /> <br />
        <button onClick={this.btnSum}>+</button>
      </div>
    )
  }
}
