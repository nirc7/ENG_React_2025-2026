import { useNavigate } from "react-router-dom";

export default function Page1(props) {
  const navigate = useNavigate();


  const btnGotoPage4WithData = () => {
    let userData = {
      userId: 7,
      userName: 'avi'
    };

    navigate('/page4', { state: userData });
  }

  return (
    <div>Page1 <br />
      <button onClick={() => navigate('/page2')} >goto page2</button> <br />
      <button onClick={btnGotoPage4WithData} >goto page4</button>
    </div>
  )
}
