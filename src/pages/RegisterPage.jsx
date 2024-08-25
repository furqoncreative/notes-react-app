import { useState } from "react";
import { register } from "../utils/api.js";
import PropTypes from "prop-types";
import { RegisterForm } from "../components/RegisterForm.jsx";

function RegisterPage({ onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function onRegister(event) {
    event.preventDefault();
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

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onRegister={onRegister}
      isLoading={isLoading}
    />
  );
}

RegisterPage.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterPage;
