import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn, logoutUser } from "../../utils/auth";

export default function CompanyRoute({ children }) {
  const role = getUserRole();
  const isLoggedIn = loggedIn();

  if (isLoggedIn && role === "company") return children;
  else if (isLoggedIn && role === "customer") {
    console.info("Customer attempted to access company route");
    return <Navigate to="/JobPostings" />;
  } else {
    if (isLoggedIn) {
      console.info("User with no role attempted to access company route");
      logoutUser();
    } else {
      console.info("Unauthenticated user attempted to access company route");
    }
    return <Navigate to="/Welcome" />;
  }
}

CompanyRoute.propTypes = {
  children: PropTypes.node,
};
