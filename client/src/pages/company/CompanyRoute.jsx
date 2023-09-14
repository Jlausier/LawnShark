import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn } from "../../utils/auth";

export default function CompanyRoute({ children }) {
  return loggedIn() && getUserRole() === "company" ? (
    children
  ) : (
    <Navigate to="/FindWork" />
  );
}

CompanyRoute.propTypes = {
  children: PropTypes.node,
};
