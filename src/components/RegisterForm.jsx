import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import { ClipLoader } from "react-spinners";
import useInput from "../hooks/useInput.js";

export function RegisterForm({ onRegister, isLoading }) {
  const { locale } = useContext(LocaleContext);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");

  function onRegisterClick() {
    onRegister(email, password, name);
  }

  return (
    <section className="auth-form">
      <h1>
        {locale === "id"
          ? "Daftarkan akunmu segera!"
          : "Register your account now!"}
      </h1>
      <form onSubmit={onRegisterClick}>
        <div className="input">
          <label htmlFor="input-name">
            {locale === "id" ? "Nama" : "Name"}
          </label>
          <input
            id="input-name"
            type="text"
            placeholder={locale === "id" ? "Masukkan nama" : "Input name"}
            onChange={onChangeName}
            value={name}
          />
        </div>
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
          <button type="submit">
            {locale === "id" ? "Daftar" : "Register"}
          </button>
        )}
        {locale === "id" ? (
          <p>
            Sudah punya akun? <a href="/login">Masuk di sini </a>
          </p>
        ) : (
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        )}
      </form>
    </section>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
