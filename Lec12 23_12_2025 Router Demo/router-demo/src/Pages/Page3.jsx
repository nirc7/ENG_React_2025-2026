import { useNavigate, useParams } from "react-router-dom";

export default function Page3(props) {
  const navigate = useNavigate();
  const { userId } = useParams();


  return (
    <div>Page3 <br />
      userId={userId} <br />
      <button onClick={() => navigate('/page1')} >goto Page1</button>
    </div>
  )
}
