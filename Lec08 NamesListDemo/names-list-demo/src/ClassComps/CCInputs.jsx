import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';



export default class CCInputs extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', age: '' };
  }


  btnAddPerson = () => {
    this.setState({ name: '', age: '' });
    this.props.sendPerson({
      id: uuidv4(),
      name: this.state.name,
      age: this.state.age
    });
  }

  render() {
    return (
      <div style={{
        border: '2px dashed brown',
        margin: 15, padding: 10
      }} >CCInputs <br />
        <div className="form-floating mb-3">
          <input type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            className="form-control" id="floatingInput" placeholder='' />
          <label htmlFor="floatingInput">NAME</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text"

            onChange={(e) => {
              let num = e.target.value;
              if (!isNaN(Number(num))) {
                this.setState({ age: num });
              }
            }}

            value={this.state.age}
            className="form-control" id="floatingInput" placeholder='' />
          <label htmlFor="floatingInput">AGE</label>
        </div>

        <button
          onClick={this.btnAddPerson}
          type="button" className="btn btn-outline-success">Success
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M136 192C136 125.7 189.7 72 256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312C189.7 312 136 258.3 136 192zM48 546.3C48 447.8 127.8 368 226.3 368L285.7 368C384.2 368 464 447.8 464 546.3C464 562.7 450.7 576 434.3 576L77.7 576C61.3 576 48 562.7 48 546.3zM544 160C557.3 160 568 170.7 568 184L568 232L616 232C629.3 232 640 242.7 640 256C640 269.3 629.3 280 616 280L568 280L568 328C568 341.3 557.3 352 544 352C530.7 352 520 341.3 520 328L520 280L472 280C458.7 280 448 269.3 448 256C448 242.7 458.7 232 472 232L520 232L520 184C520 170.7 530.7 160 544 160z" /></svg>
        </button>

      </div>
    )
  }
}
