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
        // fontFamily: 'bold',
        // fontSize: 30
      }}>CCinputs <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">NUM1:</span>
          <input type="text" className="form-control"
            onChange={this.chgNum1}
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control"
            onChange={this.chgNum2}
            id="floatingInput" placeholder='num2...' />
          <label htmlFor="floatingInput">num2...</label>
        </div>
        num1: <input type="number"
          placeholder="enter num1" value={this.state.num1} onChange={this.chgNum1} /> <br />
        num2: <input type="text"
          placeholder="enter num2" onChange={this.chgNum2} /> <br />
        <button type="button"
          onClick={this.btnSum}
          className="btn btn-outline-success">+</button>
      </div>
    )
  }
}
