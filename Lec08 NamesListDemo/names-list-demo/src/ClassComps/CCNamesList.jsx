import { Component } from 'react';
import FCListDetails from '../FuncComps/FCListDetails';
import CCInputs from './CCInputs';

export default class CCNamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [{ name: 'AVI', age: 40 }, { name: 'Ben', age: 50 }]
    };

  }

  getPerson = (person) => {
    let newPersons = [...this.state.persons, person];
    console.log(newPersons);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <div style={{ border: '2px dashed beige', margin: 15, padding: 10 }}>CCNamesList <br />
        <CCInputs sendPerson={this.getPerson} />
        <FCListDetails persons={this.state.persons} />
      </div>
    )
  }
}
