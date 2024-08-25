import { useState } from "react";
import { register } from "../utils/api.js";
import PropTypes from "prop-types";
import { RegisterForm } from "../components/RegisterForm.jsx";

function RegisterPage({ onRegisterSuccess }) {
  const [isLoading, setLoading] = useState(false);

  async function onRegister(email, password, name) {
    setLoading(true);

    register({ email, password, name })
      .then(({ data }) => {
        onRegisterSuccess(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Register failed:", e);
        setLoading(false);
      });
  }

  return <RegisterForm onRegister={onRegister} isLoading={isLoading} />;
}

RegisterPage.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterPage;
