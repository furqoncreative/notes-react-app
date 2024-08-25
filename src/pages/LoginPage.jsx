import { login } from "../utils/api.js";
import { useState } from "react";
import PropTypes from "prop-types";
import { LoginForm } from "../components/LoginForm.jsx";

function LoginPage({ loginSuccess }) {
  const [isLoading, setLoading] = useState(false);

  async function onLogin(email, password) {
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

  return <LoginForm isLoading={isLoading} onLogin={onLogin} />;
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
