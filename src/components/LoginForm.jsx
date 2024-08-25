import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import { ClipLoader } from "react-spinners";

export function LoginForm({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  isLoading,
  onLogin,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="auth-form">
      <h1>
        {locale === "id"
          ? "Silakan masuk untuk menggunakan Note App!"
          : "Please login to use Note App!"}
      </h1>
      <form onSubmit={onLogin}>
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
            Belum punya akun? <a href="/register">Daftar di sini </a>
          </p>
        ) : (
          <p>
            Don&apos;t have an account? <a href="/register">Register here</a>
          </p>
        )}
      </form>
    </section>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};
