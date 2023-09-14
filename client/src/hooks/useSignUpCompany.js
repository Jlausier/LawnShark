import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function useSignUpCompany() {
  const navigate = useNavigate();

  async function signUpAsCompany({ email, password, name, bio }) {
    try {
      console.log(email, password, name, bio);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return { signUpAsCompany };
}
