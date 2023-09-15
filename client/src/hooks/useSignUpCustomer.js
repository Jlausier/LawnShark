import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { loginUser } from "../utils/auth";

export default function useSignUpCustomer() {
  const navigate = useNavigate();

  async function signUpAsCustomer({ email, password, name, location }) {
    console.log({ email, password, name, location });
    navigate("/");
  }

  return { signUpAsCustomer };
}
