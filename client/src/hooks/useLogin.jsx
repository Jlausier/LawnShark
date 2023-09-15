import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../utils/mutations";
import { loginUser } from "../utils/auth";

export default function useLogin() {
  const [login, { error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  async function loginAsRole({ email, password }) {
    try {
      const { data } = await login({
        variables: { email, password },
      });

      loginUser(data.login.token);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return { loginAsRole, error };
}
