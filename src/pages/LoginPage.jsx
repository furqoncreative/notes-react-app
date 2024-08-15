import { login } from "../utils/api.js";
import { useState } from "react";
import PropTypes from "prop-types";
import { LoginForm } from "../components/LoginForm.jsx";

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
    <LoginForm
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      onLogin={onLogin}
    />
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
