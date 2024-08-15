import { useState } from "react";
import { register } from "../utils/api.js";
import PropTypes from "prop-types";
import { RegisterForm } from "../components/RegisterForm.jsx";

function RegisterPage({ onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function onRegister(event) {
    event.preventDefault();

    const { error, data } = await register({ email, password, name });

    if (!error) {
      onRegisterSuccess(data);
    } else {
      console.error("Register failed:", error);
    }
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
    />
  );
}

RegisterPage.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterPage;
