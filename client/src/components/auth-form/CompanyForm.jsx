import { useState } from "react";
import { validatePassword, validateEmail } from "../../utils/auth";
import useSignUpCompany from "../../hooks/useSignUpCompany";
import Button from "../common/Button";

export default function CompanyForm() {
  const { signUpAsCompany } = useSignUpCompany();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
    bio: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (e) => {
    const { name: inputName, value } = e.target;
    setFormState({
      ...formState,
      [inputName]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { email, password, name, bio } = formState;

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

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      await signUpAsCompany({
        email,
        password,
        name,
        bio,
      });

      setFormState({
        email: "",
        password: "",
        name: "",
        bio: "",
      });
      setErrorMessages({});
    } catch (err) {
      console.error(err);
      setErrorMessages({ graphQL: err });
    }
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
              value={formState.email}
              id="email"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="">
            <label htmlFor="password" className="form-label body-font">
              Password
            </label>
            <input
              value={formState.password}
              id="password"
              name="password"
              autoComplete="new-password"
              onChange={handleInputChange}
              type="password"
              className="form-control"
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
              value={formState.name}
              name="name"
              id="name"
              autoComplete="organization"
              onChange={handleInputChange}
              type="text"
              className="form-control"
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
            value={formState.bio}
            name="bio"
            id="bio"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            rows="4"
            cols="50"
          />
        </div>
      </div>
      <Button title={"Submit"} type="submit" />
    </form>
  );
}
