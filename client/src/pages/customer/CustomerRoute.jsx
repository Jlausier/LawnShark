import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn, logoutUser } from "../../utils/auth";

export default function CustomerRoute({ children }) {
  const role = getUserRole();
  const isLoggedIn = loggedIn();

  console.log(role);
  console.log(isLoggedIn);

  if (isLoggedIn && role === "customer") return children;
  else if (isLoggedIn && role === "company") return <Navigate to="/MyJobs" />;
  else {
    if (isLoggedIn) logoutUser();
    return <Navigate to="/Welcome" />;
  }
}

CustomerRoute.propTypes = {
  children: PropTypes.node,
};
