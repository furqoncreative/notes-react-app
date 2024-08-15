import PropTypes from "prop-types";

export function EmailInput({ email, onChangeEmail }) {
  return (
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
  );
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
};
