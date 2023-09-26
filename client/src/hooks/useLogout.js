import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

export default function useLogout() {
  const navigate = useNavigate();

  function logout() {
    logoutUser();
    navigate("/welcome");
  }

  return logout;
}
