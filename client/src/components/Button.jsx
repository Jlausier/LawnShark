import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ currentPage, path, title }) {
  return (
    <button className="btn green text-light">
      <Link
        to={path}
        className={currentPage === path ? "nav-link active" : "nav-link"}
      >
        {title}
      </Link>
    </button>
  );
}

Button.propTypes = {
  currentPage: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
};