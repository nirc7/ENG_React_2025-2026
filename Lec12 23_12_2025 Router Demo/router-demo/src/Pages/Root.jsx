import { Link, Outlet } from "react-router-dom";

export default function Root(props) {
  return (
    <div>
      <Link to="page1">page1</Link> |
      <Link to="page2">page2</Link> |
      <Link to="page3/7">page3</Link>

      <div style={{ border: 'solid black 1px' }} >
        <Outlet />
      </div>
    </div>
  )
}
