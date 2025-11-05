
export default function FCStudent(props) {

  //props.id=7; //ERROR!!! READ ONLY!
  let grade = props.grade;
  let address = 'ruppin 1';

  if (80 < grade) {
    grade++;
  }

  if (grade < 55) {
    return (
      <p>ths sutdent has failed!</p>
    );
  }

  function btnAddBonus() {
    console.log(grade);
    grade += 5;
    console.log(grade);
  }

  function chgAddress(e){
    console.log(e.target.value);    
    address = e.target.value;
  }

  return (
    <div>
      id = {props.id} <br />
      name = {props.name} <br />
      grade = {grade} <br />
      <button onClick={btnAddBonus} >Add Bonus +5</button> <br />
      address: <input type="text" onChange={chgAddress}/> <br />
      ads= {address}
    </div>
  );
}