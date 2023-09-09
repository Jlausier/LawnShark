import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [state, setState] = useState({
    status: "pending",
    error: null,
    user: null,
  });

  useEffect(() => {
    setState({ status: "success", error: null, user: { name: "ERIC" } });
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
