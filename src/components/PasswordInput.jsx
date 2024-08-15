import PropTypes from "prop-types";

export function PasswordInput({ password, onChangePassword }) {
  return (
    <div className="input">
      <label htmlFor="input-passsword">Password</label>
      <input
        className="input"
        id="input-passsword"
        type="password"
        placeholder="Password"
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
