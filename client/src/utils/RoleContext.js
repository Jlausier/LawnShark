import { createContext } from "react";

export const RoleContext = createContext({
  company: {},
  setCompany: () => {},
  customer: {},
  setCustomer: () => {},
});

// export function useRoleData() {
//   const { company, customer } = useContext(RoleContext);

//   console.log({ company, customer });

//   if (company) return company;
//   else if (customer) return customer;
//   else return undefined;
// }
