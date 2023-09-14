import { useState } from "react";
import { validatePassword, validateEmail } from "../../utils/auth";
import Button from "../Button";

export default function CompanyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (e) => {
    const { name: inputName, value } = e.target;

    if (inputName === "email") setEmail(value);
    else if (inputName == "password") setPassword(value);
    else if (inputName == "name") setName(value);
    else if (inputName === "bio") setBio(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (email === "") {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Email is invalid";
    }

    if (password === "") {
      errors.password = "Password is required";
    } else if (!validatePassword(password)) {
      errors.password = "Choose a more secure password for the account";
    }

    if (name === "") {
      errors.name = "Company name is required";
    }

    if (bio === "") {
      errors.bio = "Company bio is required";
    }

    if (Object.keys(errors).length !== 0) {
      setErrorMessages(errors);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row mb-4">
        <div className="col-12 col-lg-6">
          <div className="">
            <label htmlFor="emailInput" className="form-label body-font">
              Email Address
            </label>
            <input
              value={email}
              id="email"
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="">
            <label htmlFor="password" className="form-label body-font">
              Password
            </label>
            <input
              value={password}
              id="password"
              name="password"
              onChange={handleInputChange}
              type="password"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="">
            <label htmlFor="name" className="form-label body-font">
              Company Name
            </label>
            <input
              value={name}
              name="name"
              id="name"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <label htmlFor="bio" className="form-label body-font">
            Company Bio
          </label>
          <textarea
            value={bio}
            name="bio"
            id="bio"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            rows="4"
            cols="50"
            required
          />
        </div>
      </div>
      <Button title={"Submit"} type="submit" />
    </form>
  );
}
