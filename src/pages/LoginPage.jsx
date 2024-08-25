import { login } from "../utils/api.js";
import { useState } from "react";
import PropTypes from "prop-types";
import { LoginForm } from "../components/LoginForm.jsx";

function LoginPage({ loginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function onLogin(event) {
    event.preventDefault();
    setLoading(true);

    login({ email, password })
      .then(({ data }) => {
        loginSuccess(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Login failed:", e);
        setLoading(false);
      });
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
      isLoading={isLoading}
      onLogin={onLogin}
    />
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
