import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { SIGN_UP_CUSTOMER } from "../utils/mutations";
import { loginUser } from "../utils/auth";

export default function useSignUpCustomer() {
  const [signUpCustomer, { error }] = useMutation(SIGN_UP_CUSTOMER);
  const navigate = useNavigate();

  async function signUpAsCustomer({ email, password, name, location }) {
    const { data } = await signUpCustomer({
      variables: {
        email,
        password,
        name,
        location,
      },
    });

    loginUser(data.signUpCustomer.token);
    navigate("/");
  }

  return { signUpAsCustomer, error };
}
