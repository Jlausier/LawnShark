import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { SIGN_UP_COMPANY } from "../utils/mutations";
import { loginUser } from "../utils/auth";

export default function useSignUpCompany() {
  const [signUpCompany, { error }] = useMutation(SIGN_UP_COMPANY);
  const navigate = useNavigate();

  async function signUpAsCompany({ email, password, name, bio }) {
    const { data } = await signUpCompany({
      variables: {
        email,
        password,
        name,
        bio,
      },
    });

    loginUser(data.signUpCompany.token);
    navigate("/FindWork");
  }

  return { signUpAsCompany, error };
}
