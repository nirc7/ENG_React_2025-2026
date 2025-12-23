import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showErrMsg, setShowErrMsg] = useState(false);

  const btnLogin = () => {
    if (email === 'avi@gmail.com' && pass === 'avi123') {
      setShowErrMsg(false);

      let userData = {
        name: email.replace('@gmail.com', '')
      };

      navigate('/home', { state: userData });
    }
    else {
      setShowErrMsg(true);
    }

    setEmail('');
    setPass('');
  }

  return (
    <div>LoginPage <br />
      Email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
      Pass: <input type="text" onChange={(e) => setPass(e.target.value)} value={pass} /> <br />
      {showErrMsg && <div style={{ color: 'red' }} >WRONG EMAIL OR PASS!</div>}
      <button onClick={btnLogin}>login in</button>

    </div>
  )
}
