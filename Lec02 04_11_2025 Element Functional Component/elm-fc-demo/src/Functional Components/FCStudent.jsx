
export default function FCStudent(props) {

  let grade = props.grade;

  if (grade < 55) {
    console.log('<55');
    return (
      <div>Fail!</div>
    );
  }

  if (80 <= grade) {
    grade += 5;
  }

  return (
    <div> <br />
      <div>Studnet</div>
      <div>React</div>
      id = {props.id} <br />
      name= {props.name} <br />
      grade = {grade}
      <br />
    </div>
  );
}
