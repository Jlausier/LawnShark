import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { loggedIn } from "../../utils/auth";

export default function PrivateRoute({ children, condition = true }) {
  return loggedIn() && condition ? children : <Navigate to="/welcome" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool,
};
