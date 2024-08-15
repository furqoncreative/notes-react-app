import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";

export function LoginForm({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onLogin,
}) {
  return (
    <section className="auth-form">
      <h1>Login</h1>
      <form onSubmit={onLogin}>
        <EmailInput email={email} onChangeEmail={onChangeEmail} />
        <PasswordInput
          password={password}
          onChangePassword={onChangePassword}
        />
        <button type="submit">Login</button>
        <span>
          Belum punya akun? <a href="/register">Daftar di sini</a>
        </span>
      </form>
    </section>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};
