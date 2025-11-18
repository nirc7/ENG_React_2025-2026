import { Component } from "react";

export default class CCCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  chgTxtNum1 = (e) => {
    console.log(this.state.num1);//0
    this.setState({
      num1: Number(e.target.value),
      result: 5
    });
    console.log(this.state.num1);//7
  }

  chgTxtNum2 = (e) => {
    this.setState({ num2: parseInt(e.target.value) });
  }

  btnSum = () => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  btnAdd2Res = () => {
    console.log(this.state.result);
    this.setState(prevS => ({ result: prevS.result + 1 }));
    //console.log(this.state.result);    
    //this.setState({ result: this.state.result + 1 });
    console.log(this.state.result);
    this.setState({ num1: 7 });
  }

  render() {
    console.log('render');
    console.log(this.state.num1);

    return (
      <div>
        <h1>Calculator</h1>

        NUM1: <input type="number"
          placeholder='enter a num'
          onChange={this.chgTxtNum1}
        /> {this.state.num1} <br />

        NUM2: <input type="number"
          placeholder='enter a num'
          onChange={this.chgTxtNum2} />
        {this.state.num2} <br /><br />

        <button onClick={this.btnSum} >+</button> <br />
        = {this.state.result} <br />
        <button onClick={this.btnAdd2Res} >++</button> <br />
      </div>
    );
  }
}



