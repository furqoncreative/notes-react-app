import { React, useState } from "react";
import { register } from "../utils/api.js";
import PropTypes from "prop-types";

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
    <section className="auth-form">
      <h1>Register</h1>
      <form className="universal-form" onSubmit={onRegister}>
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
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            type="text"
            placeholder="Name"
            onChange={onChangeName}
            value={name}
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

RegisterPage.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterPage;
