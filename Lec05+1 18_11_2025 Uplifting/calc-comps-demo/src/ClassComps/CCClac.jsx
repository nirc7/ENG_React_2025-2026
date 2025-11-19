import React, { Component } from 'react'
import FCInputs from '../FuncComps/FCInputs'
import FCResult from '../FuncComps/FCResult'
import CCInputs from './CCinputs';
import { resume } from 'react-dom/server';

export default class CCClac extends Component {
  constructor(props) {
    super(props);

    this.state = { result: 0 };
  }

  getResFromInputs = (res) => {
    console.log(res);
    this.setState({ result: res });
  }


  render() {

    return (
      <div style={{
        border: '2px solid green',
        margin: 20,
        padding: 10,
        borderRadius: 10,
        color: 'purple'
      }}>CCClac <br />
        <FCInputs sendtResFromInputs={this.getResFromInputs}/>
        <CCInputs sendtResFromInputs={this.getResFromInputs} />  
        <FCResult res={this.state.result} />
      </div>
    )
  }
}
