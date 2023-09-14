import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn } from "../../utils/auth";

export default function CompanyRoute({ children }) {
  const role = getUserRole();

  console.log(role);

  return loggedIn() && role === "company" ? (
    children
  ) : (
    <Navigate to="/JobPostings" />
  );
}

CompanyRoute.propTypes = {
  children: PropTypes.node,
};
