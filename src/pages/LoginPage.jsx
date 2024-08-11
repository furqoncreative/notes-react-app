import { login } from "../utils/api.js";
import { useState } from "react";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin(event) {
    event.preventDefault();

    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    } else {
      console.error("Login failed:", error);
    }
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={onLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
