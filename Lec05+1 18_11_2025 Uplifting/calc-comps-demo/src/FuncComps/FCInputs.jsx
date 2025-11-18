
export default function FCInputs(props) {
  let radius = 15;
  let num1=0, num2=0;

  const chgNum1 = (e) => {
    num1 = Number( e.target.value);
  }

  const chgNum2 = (e) => {
    num2 =  Number( e.target.value);
  }

  const btnSum = () => {
    props.sendtResFromInputs(num1 + num2);
  }

  return (
    <div style={{
      border: '1px solid black',
      margin: 10 * 2,
      padding: 10,
      borderRadius: radius,
      color: 'purple',
      fontFamily: 'bold',
      fontSize: 30
    }}>FCInputs <br />

      num1: <input type="number"
        placeholder="enter num1" onChange={chgNum1} /> <br />
      num2: <input type="text"
        placeholder="enter num2" onChange={chgNum2} /> <br />
      <button onClick={btnSum}>+</button>
    </div>
  )
}
