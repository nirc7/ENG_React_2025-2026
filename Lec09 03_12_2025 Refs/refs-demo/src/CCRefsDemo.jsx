import React, { Component } from 'react';
import FCPerson from './FCPerson';

export default class CCRefsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this.num1;
    this.num2 = React.createRef();


  }

  chgNums = () => {

    this.setState({
      num1: this.num1.value,
      num2: this.num2.current.value
    });
  }

  chgN34 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  btnChgCounter = () => {

    console.log(this.state.counter);
    this.setState(prevS => ({ counter: prevS.counter + 1 }), ()=>{
      console.log('after counter changed! =' , this.state.counter);      
    })
    console.log(this.state.counter);

  }

  render() {

    console.log('new counter1 go 2 DB = ', this.state.counter);

    console.log(this.state.num1);

    return (
      <div>CCRefsDemo <br />

        <FCPerson id="3" name="avi" /> <br />

        num1<input type="text"
          ref={refNum1 => this.num1 = refNum1}
          onChange={this.chgNums} />
        {this.state.num1 && <h3>{this.state.num1}</h3>}
        <br />
        num2<input type="text"
          ref={this.num2}
          onChange={this.chgNums} />
        {this.state.num2 && <h3>{this.state.num2}</h3>} <br />
        <button onClick={() => this.num1.focus()}>set Focus</button> <br />
        num3:<input type="text" name="num3"
          onChange={this.chgN34} />
        {this.state.num3} <br />
        num4:<input type="text" name="num4"
          onChange={this.chgN34} />
        {this.state.num4} <br /> <br />
        <button onClick={this.btnChgCounter} >++</button> <br />
        coutner = {this.state.counter}

      </div>
    )
  }
}
