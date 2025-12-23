import { useLocation, useNavigate } from "react-router-dom"

export default function Page4(props) {
  const navigate = useNavigate();
  const { state } = useLocation();
  let userData = state;

  return (
    <div>Page4 <br />
      user Id = {userData.userId} <br />
      user Name = {userData.userName} <br />
      <button onClick={() => navigate('/page1')} >goto Page1</button>
    </div>
  )
}
