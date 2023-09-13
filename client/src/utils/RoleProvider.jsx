import { useState } from "react";
import PropTypes from "prop-types";

import { RoleContext } from "./RoleContext";

export default function RoleProvider({ children }) {
  const [company, setCompany] = useState({});
  const [customer, setCustomer] = useState({});

  return (
    <RoleContext.Provider
      value={{
        company,
        setCompany,
        customer,
        setCustomer,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

RoleProvider.propTypes = {
  children: PropTypes.node,
};
