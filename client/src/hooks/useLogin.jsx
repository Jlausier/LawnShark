import { useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { RoleContext } from "../utils/RoleContext";
import { LOGIN_USER } from "../utils/mutations";
import { loginUser } from "../utils/auth";

export default function useLogin() {
  const { setCompany, company, setCustomer, customer } =
    useContext(RoleContext);
  const [login, { error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Company updated:", company);
    console.log("Customer updated:", customer);
  }, [setCompany, company, setCustomer, customer]);

  async function loginAsRole({ email, password }) {
    try {
      const { data } = await login({
        variables: { email, password },
      });

      loginUser(data.login.token);

      console.log(data.login);

      const { role } = data.login.user;

      if (role === "customer" && data.login.user._customer) {
        const { _id, name, location } = data.login.user._customer;
        setCustomer({
          _id,
          name,
          location,
        });
      } else if (role === "company" && data.login.user._company) {
        const { _id, name, description } = data.login.user._company;
        setCompany({
          _id,
          name,
          description,
        });
      } else return;

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return { loginAsRole, error };
}
