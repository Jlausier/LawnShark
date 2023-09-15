import { useState } from "react";
import { validatePassword, validateEmail } from "../../utils/auth";
import Button from "../Button";

const stateNames = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

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

const stateOptions = stateNames.map((state) => (
  <option key={state} value={state}>
    {state}
  </option>
));

export default function CustomerForm() {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = () => {
    alert("Submit Form");
  };

  const [formState, setFormState] = useState(initialFormState);
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (e) => {
    const { name: inputName, value } = e.target;
    setFormState({
      ...formState,
      [inputName]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (formState.email === "") {
      errors.email = "Email is required";
    } else if (!validateEmail(formState.email)) {
      errors.email = "Email is invalid";
    }

    if (formState.password === "") {
      errors.password = "Password is required";
    } else if (!validatePassword(formState.password)) {
      errors.password = "Choose a more secure password for the account";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row mb-4">
        <div className="col-12 col-lg-6">
          <div className="">
            <label htmlFor="email" className="form-label body-font">
              Email Address
            </label>
            <input
              value={formState.email}
              name="email"
              id="email"
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
              name="password"
              id="password"
              onChange={handleInputChange}
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
              value={formState.firstName}
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
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
              value={formState.lastName}
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
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
              value={formState.street}
              name="street"
              id="street"
              onChange={handleInputChange}
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
              value={formState.city}
              name="city"
              id="city"
              onChange={handleInputChange}
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
            >
              {/* Default empty option */}
              <option value="">Select a state</option>
              {stateOptions}
            </select>
          </div>
          <div className="col-12 col-lg-3">
            <label htmlFor="zip" className="form-label body-font">
              Zip
            </label>
            <input
              value={formState.zip}
              name="zip"
              id="zip"
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <Button title={"Submit"} onClick={handleSubmit} />
    </form>
  );
}
