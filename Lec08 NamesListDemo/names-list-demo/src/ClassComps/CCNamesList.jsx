import { Component } from 'react';
import FCListDetails from '../FuncComps/FCListDetails';
import CCInputs from './CCInputs';

//import cp from '../assets/cp_assets.png'; // with import
//import cp_images from '../images/cp_images.png'; // with import
import x from "../images/cp_public.jpg";

export default class CCNamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [{ id: 1, name: 'AVI', age: 40 }, { id: 2, name: 'Ben', age: 50 }]
    };

  }

  getPerson = (person) => {
    let newPersons = [...this.state.persons, person];
    console.log(newPersons);
    this.setState({ persons: newPersons });
  }

  removePerson = (id) => {
    let newPersons = this.state.persons.filter(per => per.id !== id);
    console.log(newPersons);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <div style={{ border: '2px dashed beige', margin: 15, padding: 10 }}>
        cp public <img width={50} src="./cp_public.jpg" /> <br />
        cp assets <img width={50} src="../assets/cp_assets.PNG" /><br />
        {/* cp assets import <img width={50} src={cp} /><br /> */}
        cp images <img width={50} src={"../images/cp_public.jpg"} /><br />
        cp images <img width={50} src={x} /><br />


        CCNamesList <br />
        <CCInputs sendPerson={this.getPerson} />
        <FCListDetails persons={this.state.persons} removePerson={this.removePerson} />


        {/* <div style={{ border: '2px dashed beige' }}>
          hello world! <br />
          one
        </div>

        asd lkj lkj <span style={{ border: '2px dashed red', color:'green' }}> lkj lkj lkj lkj <br />
        asdas lkjlkj <br />
        lkjlkj  lkj lkj lkj lkj lk jl </span> kj lkj lk j

        <ul>
          <li>one</li>
          <li>two</li>
        </ul> */}

      </div>
    )
  }
}
