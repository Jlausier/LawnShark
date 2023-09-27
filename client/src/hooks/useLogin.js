import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../utils/mutations";
import { loginUser, getUserHomeLink } from "../utils/auth";

export default function useLogin() {
  const [_login, { error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  async function login({ email, password }) {
    try {
      const { data } = await _login({
        variables: { email, password },
      });

      loginUser(data.login.token);
      navigate(getUserHomeLink(data.login.user.role));
    } catch (err) {
      console.error(err);
    }
  }

  return { login, error };
}
