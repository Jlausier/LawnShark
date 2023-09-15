import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavButton({ title, path }) {
  return (
    <Link to={path} className="buttonMaster">
      {title}
    </Link>
  );
}

NavButton.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
