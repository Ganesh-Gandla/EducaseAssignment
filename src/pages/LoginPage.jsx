import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContext from "../context/PageContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setPageIndex } = useContext(PageContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setPageIndex(3);
    navigate("/profile");
  }

  return (
    <div className="container login-container">
      <h1 className="text heading">
        Signin to your <br />PopX account
      </h1>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend>Email</legend>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Email address"
            className="text-input"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            className="text-input"
          />
        </fieldset>

        <button type="submit" className="btn login-page-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
