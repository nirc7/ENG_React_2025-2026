import { Component } from 'react'

export default class CCChild extends Component {

  btnSendData = () => {
    this.props.sendDataFunc(7);
  }

  render() {
    return (
      <div>CCChild <br />
        name= {this.props.name} <br />
        <button onClick={this.btnSendData}>sendDataFromChild2Parent</button>
      </div>
    )
  }
}
