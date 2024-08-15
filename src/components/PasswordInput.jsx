import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";

export function PasswordInput({ password, onChangePassword }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="input">
      <label htmlFor="input-passsword">
        {locale === "id" ? "Kata sandi" : "Password"}
      </label>
      <input
        className="input"
        id="input-passsword"
        type="password"
        placeholder={locale === "id" ? "Masukkan kata sandi" : "Input password"}
        onChange={onChangePassword}
        value={password}
      />
    </div>
  );
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};
