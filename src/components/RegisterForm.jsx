import PropTypes from "prop-types";
import { EmailInput } from "./EmailInput.jsx";
import { PasswordInput } from "./PasswordInput.jsx";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";

export function RegisterForm({
  name,
  onChangeName,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onRegister,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="auth-form">
      <h1>
        {locale === "id"
          ? "Daftarkan akunmu segera!"
          : "Register your account now!"}
      </h1>
      <form onSubmit={onRegister}>
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
        <button type="submit">{locale === "id" ? "Daftar" : "Register"}</button>
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
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
