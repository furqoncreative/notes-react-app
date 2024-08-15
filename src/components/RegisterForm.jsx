import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";

export function RegisterForm({
  name,
  onChangeName,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onRegister,
}) {
  return (
    <section className="auth-form">
      <h1>Login</h1>
      <form onSubmit={onRegister}>
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
        <EmailInput email={email} onChangeEmail={onChangeEmail} />
        <PasswordInput
          password={password}
          onChangePassword={onChangePassword}
        />
        <button type="submit">Login</button>
        <span>
          Sudah punya akun? <a href="/login">Masuk di sini</a>
        </span>
      </form>
    </section>
  );
}

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
