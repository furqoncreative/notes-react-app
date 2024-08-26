import { ClipLoader } from "react-spinners";
import PropTypes from "prop-types";

function LoadingIndicator({ isLoading, size }) {
  const root = document.documentElement;
  const onSurfaceColor = getComputedStyle(root)
    .getPropertyValue("--md-sys-color-on-surface")
    .trim();

  return <ClipLoader loading={isLoading} size={size} color={onSurfaceColor} />;
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

export default LoadingIndicator;
