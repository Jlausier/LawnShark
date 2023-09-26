import { useState } from "react";
import { validatePassword, validateEmail } from "../../utils/auth";
import useSignUpCustomer from "../../hooks/useSignUpCustomer";
import Button from "../common/Button";
import states from "./states.json";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

export default function CustomerForm() {
  const { signUpAsCustomer } = useSignUpCustomer();

  const [selectedState, setSelectedState] = useState("");
  const [customerFormState, setCustomerFormState] = useState(initialFormState);
  const [errorMessages, setErrorMessages] = useState({});

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCustomerInputChange = (e) => {
    const { name: inputName, value } = e.target;
    setCustomerFormState({
      ...customerFormState,
      [inputName]: value,
    });
  };

  const handleCustomerFormSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { email, password, firstName, lastName, street, city, zip } =
      customerFormState;

    const validateEmptyInput = (title, name, value) => {
      if (value === "") errors[name] = `${title} is required`;
    };

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

    validateEmptyInput("First name", "firstName", firstName);
    validateEmptyInput("Last name", "lastName", lastName);
    validateEmptyInput("Street", "street", street);
    validateEmptyInput("City", "city", city);
    validateEmptyInput("State", "state", selectedState);
    validateEmptyInput("Zip code", "zip", zip);

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      console.log(errorMessages);
      return;
    }

    const newCustomer = {
      email,
      password,
      name: firstName + " " + lastName,
      location: {
        address: street,
        city,
        state: selectedState,
        zip,
      },
    };

    try {
      await signUpAsCustomer(newCustomer);
      setCustomerFormState(initialFormState);
      setSelectedState("");
      setErrorMessages({});
    } catch (err) {
      console.error(err);
      setErrorMessages({ graphQL: err });
    }
  };

  return (
    <form onSubmit={handleCustomerFormSubmit}>
      <div className="row mb-4">
        <div className="col-12 col-lg-6">
          <div className="">
            <label htmlFor="email" className="form-label body-font">
              Email Address
            </label>
            <input
              value={customerFormState.email}
              name="email"
              id="email"
              autoComplete="email"
              onChange={handleCustomerInputChange}
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
              value={customerFormState.password}
              name="password"
              id="password"
              autoComplete="new-password"
              onChange={handleCustomerInputChange}
              type="password"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-md-6">
          <div className="">
            <label htmlFor="firstName" className="form-label body-font">
              First Name
            </label>
            <input
              value={customerFormState.firstName}
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              onChange={handleCustomerInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="">
            <label htmlFor="lastName" className="form-label body-font">
              Last Name
            </label>
            <input
              value={customerFormState.lastName}
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              onChange={handleCustomerInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="row mb-2">
          <div className="col">
            <label htmlFor="street" className="form-label body-font">
              Street
            </label>
            <input
              value={customerFormState.street}
              name="street"
              id="street"
              autoComplete="address-line1"
              onChange={handleCustomerInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-lg-5">
            <label htmlFor="city" className="form-label body-font">
              City
            </label>
            <input
              value={customerFormState.city}
              name="city"
              id="city"
              autoComplete="address-level2"
              onChange={handleCustomerInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-12 col-lg-4">
            <label htmlFor="state" className="form-label body-font">
              State
            </label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="form-control"
              name="state"
              id="state"
              autoComplete="address-level1"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-lg-3">
            <label htmlFor="zip" className="form-label body-font">
              Zip
            </label>
            <input
              value={customerFormState.zip}
              name="zip"
              id="zip"
              autoComplete="postal-code"
              onChange={handleCustomerInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <Button title={"Submit"} type="submit" />
    </form>
  );
}
