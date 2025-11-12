
export default function FCStudent(props) {

  let grade = props.grade;
  let age=50;

  if (grade < 55) {
    console.log('<55');
    return (
      <div>Fail!</div>
    );
  }

  if (80 <= grade) {
    grade += 5;
  }

  function btnAddGrade() {
    console.log(grade);
    grade++;
    console.log(grade);
  }

  function chgAge(e) {
    console.log(e.target.value);
    age = e.target.value;
  }

  return (
    <div> <br />
      <div>Studnet</div>
      <div>React</div>
      id = {props.id} <br />
      name= {props.name} <br />
      grade = {grade}      <br />
      <button onClick={btnAddGrade} >Add GRade</button> <br />
      Age: <input type="text" onChange={chgAge} /> <br />
      age= {age}
    </div>
  );
}
