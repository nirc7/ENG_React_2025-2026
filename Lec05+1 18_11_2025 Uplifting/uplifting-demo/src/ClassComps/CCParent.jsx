import { Component } from 'react';
import CCChild from './CCChild';

export default class CCParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    };
  }

  getData = (data) => {
    console.log('in parent ', data);
    this.setState({ num: data });
  }

  render() {
    console.log('render');
    
    return (
      <div>CCParent <br />
        num={this.state.num} <br /> <br />
        <CCChild name="avi" id={7} sendDataFunc={this.getData} />
      </div>
    )
  }
}
