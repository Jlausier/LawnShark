import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBarLink({ currentPage, path, title }) {
  return (
    <li className="nav-item">
      <Link
        to={path}
        className={currentPage === path ? "nav-link active" : "nav-link"}
      >
        {title}
      </Link>
    </li>
  );
}

NavBarLink.propTypes = {
  currentPage: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
};
