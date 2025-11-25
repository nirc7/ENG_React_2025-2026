import { Component } from 'react';

export default class CCPersons extends Component {
  constructor(props) {
    super(props);

    console.log('ctor');

    this.state = {
      count: 0,
      persons: ['avi', 'ben', 'charlie', 'dora']
    };

    //code perons <--getPreonsFromDB()...5 seconds
    //SETsETSTATE() //ERROR! 

  }

  //only once after the first render!!!
  componentDidMount() {
    console.log('did mount!');

    //code perons <--getPreonsFromDB()...5 seconds
    //SETsETSTATE()  
  }

  componentWillUnmount() {
    console.log('unmount!');
  }

  render() {

    //code perons <--getPreonsFromDB()...5 seconds
    //SETsETSTATE() //ERROR! 

    console.log('render persons');


    let personsStr = this.state.persons.map( (person, index) =>
      <a href="#" key={index} className="list-group-item list-group-item-action">{person}</a>
    );


    // let counter = 0;
    // let personsStr = this.state.persons.map(person => {
    //   counter++;
    //   return <a href="#" key={counter} className="list-group-item list-group-item-action">{person}</a>
    // });



    return (
      <div>CCPersons <br />

        <br />
        <div className="list-group">
          {personsStr}
        </div>
        <br />
        <button onClick={() =>
          this.setState(prevS => ({ count: prevS.count + 1 }))}>Counter</button> <br />
        count = {this.state.count}



      </div >
    )
  }
}
