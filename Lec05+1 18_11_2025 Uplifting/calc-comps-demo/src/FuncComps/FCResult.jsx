

export default function FCResult(props) {
  return (
    <div style={{
      border: '2px dashed brown',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      color: 'red'
    }}>FCResult <br />
      res = {props.res}
    </div>
  )
}
