import { useEffect, useState } from "react";


export default function Person(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [names, setNames] = useState({ name1: 'avi', name2: 'ben' });

  let num = 7;

  const cngName1 = () => {
    //setNames({ name1: 'charlie', name2: names.name2 });
    setNames({ ...names, name1: 'charlie' });
    // num = 8;
    // console.log(num);    
    // f1(nm);
  }

  // const f1=()=>{
  //   console.log(num);
  // }

  console.log(num);

  useEffect(() => {
    console.log('general ue');
  });

  useEffect(() => {
    console.log('count changed save ti to DB!', count);
  }, [count]);

  useEffect(() => {
    console.log('count2 changed save ti to DB!', count2);
  }, [count2]);

  useEffect(() => {
    console.log('count count2 changed save ti to DB!', count, count2);
  }, [count, count2]);

  useEffect(() => {
    console.log('did mount  - go fetch students from DB....setStudents(students)');


    return () => {
      console.log('will unmount!  - free resorces!');
    }
  }, []);


  console.log(num);

  return (
    <div>Person <br />
      <button onClick={() => setCount(7)} >7</button> <br />
      <button onClick={() => setCount(pervC => pervC + 1)} >+</button> <br />
      count= {count} <br />
      <button onClick={() => setCount2(pervC2 => pervC2 + 2)} >++</button> <br />
      count2= {count2} <br /> <br />

      name1 = {names.name1} <br />
      name2 = {names.name2} <br />
      <button onClick={cngName1} >change name1</button>
    </div>
  )
}
