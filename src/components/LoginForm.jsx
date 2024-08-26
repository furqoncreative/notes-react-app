import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import { ClipLoader } from "react-spinners";
import useInput from "../hooks/useInput.js";
import { Link } from "react-router-dom";

export function LoginForm({ isLoading, onLogin }) {
  const { locale } = useContext(LocaleContext);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onLoginClick = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <section className="auth-form">
      <h1>
        {locale === "id"
          ? "Silakan masuk untuk menggunakan Note App!"
          : "Please login to use Note App!"}
      </h1>
      <form onSubmit={onLoginClick}>
        <EmailInput email={email} onChangeEmail={onChangeEmail} />
        <PasswordInput
          password={password}
          onChangePassword={onChangePassword}
        />
        {isLoading ? (
          <ClipLoader
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <button type="submit">{locale === "id" ? "Masuk" : "Login"}</button>
        )}

        {locale === "id" ? (
          <p>
            Belum punya akun? <Link to="/register">Daftar di sini </Link>
          </p>
        ) : (
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>
        )}
      </form>
    </section>
  );
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};
