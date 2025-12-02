
export default function FCListDetails(props) {

  let personsStr = props.persons.map(person =>
    <li key={person.id} className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{person.name.toUpperCase()}</div>

        <span
          onClick={() => props.removePerson(person.id)}
          style={{ marginRight: 20, cursor: 'pointer', color: 'red' }}>
          <svg style={{ marginBottom: 5 }} xmlns="http://www.w3.org/2000/svg"
            width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
          </svg></span>

        Hello {person.name}  (id = {person.id})

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
