import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn } from "../../utils/auth";

export default function CustomerRoute({ children }) {
  return loggedIn() && getUserRole() === "customer" ? (
    children
  ) : (
    <Navigate to="/FindWork" />
  );
}

CustomerRoute.propTypes = {
  children: PropTypes.node,
};
