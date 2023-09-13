import { useState } from "react";

import Button from "../Button";
import useLogin from "../../hooks/useLogin";

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const { loginAsRole } = useLogin();

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
      await loginAsRole(formState);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="fs-5">Log in to Lawn Shark</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          <div id="emailHelp" className="form-text text-white">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
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
