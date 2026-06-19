import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="card">

        <h2>📚 Library Login</h2>

        <button onClick={loginHandler}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;