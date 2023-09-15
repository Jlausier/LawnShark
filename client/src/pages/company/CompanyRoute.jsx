import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserRole, loggedIn, logoutUser } from "../../utils/auth";

export default function CompanyRoute({ children }) {
  const role = getUserRole();
  const isLoggedIn = loggedIn();

  console.log(role);
  console.log(isLoggedIn);

  if (isLoggedIn && role === "company") return children;
  else if (isLoggedIn && role === "customer")
    return <Navigate to="/JobPostings" />;
  else {
    if (isLoggedIn) logoutUser();
    return <Navigate to="/Welcome" />;
  }
}

CompanyRoute.propTypes = {
  children: PropTypes.node,
};
