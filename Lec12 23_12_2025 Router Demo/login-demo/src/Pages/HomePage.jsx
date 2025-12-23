import { Link, useLocation } from "react-router-dom";

export default function HomePage(props) {
  const { state } = useLocation();
  let userData = state;

  return (
    <div>HomePage <br />
      Hello {userData.name}! <br />
      <Link to="/">Sign Out</Link>
    </div>
  )
}
