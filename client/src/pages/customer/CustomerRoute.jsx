import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn, logoutUser } from "../../utils/auth";

export default function CustomerRoute({ children }) {
  const role = getUserRole();
  const isLoggedIn = loggedIn();

  if (isLoggedIn && role === "customer") return children;
  else if (isLoggedIn && role === "company") {
    console.info("Company attempted to access customer route");
    return <Navigate to="/MyJobs" />;
  } else {
    if (isLoggedIn) {
      console.info("User with no role attempted to access customer route");
      logoutUser();
    } else {
      console.info("Unauthenticated user attempted to access customer route");
    }
    return <Navigate to="/Welcome" />;
  }
}

CustomerRoute.propTypes = {
  children: PropTypes.node,
};
