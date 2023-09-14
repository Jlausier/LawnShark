import { createContext, useContext } from "react";

export const RoleContext = createContext({
  company: {},
  setCompany: () => {},
  customer: {},
  setCustomer: () => {},
});

export function useRoleData() {
  const { company, customer } = useContext(RoleContext);

  if (Object.keys(company).length !== 0) return company;
  else if (Object.keys(customer).length !== 0) return customer;
  else return undefined;
}
