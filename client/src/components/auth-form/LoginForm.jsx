import { useState } from "react";

import Button from "../common/Button";
import useLogin from "../../hooks/useLogin";

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const { login } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formState);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="mb-4 fs-3 header">Log in to LawnShark</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label body-font">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label body-font">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <Button title={"Submit"} type="submit" />
      </form>
    </div>
  );
}
