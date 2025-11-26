
export default function FCListDetails(props) {

  let personsStr = props.persons.map(person =>
    <li key={person.name} className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{person.name.toUpperCase()}</div>
        Hello {person.name}
      </div>
      <span className="badge text-bg-primary rounded-pill">{person.age}</span>
    </li>
  );

  return (
    <div style={{ border: '2px dashed #888', margin: 15, padding: 10 }}>FCListDetails <br />

      <ol className="list-group list-group-numbered">
        {personsStr}
      </ol>
    </div>
  )
}
