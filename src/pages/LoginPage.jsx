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
    <section className="auth-form">
      <h1>Login</h1>
      <form className="universal-form" onSubmit={onLogin}>
        <div className="input">
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            onChange={onChangeEmail}
            value={email}
          />
        </div>
        <div className="input">
          <label htmlFor="input-passsword">Password</label>
          <input
            id="input-passsword"
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <span>
          Belum punya akun? <a href="/register">Daftar di sini</a>
        </span>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
