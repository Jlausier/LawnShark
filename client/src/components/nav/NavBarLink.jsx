import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBarLink({ currentPage, path, title }) {
  return (
    <li className="nav-item mb-2 fs-5 w-100 rounded">
      <Link
        to={path}
        className={currentPage === path ? "px-3 dark-green nav-link border-start border-5 body-font fw-bold text-light" : "px-3 nav-link body-font fw-semibold text-dark"}

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
