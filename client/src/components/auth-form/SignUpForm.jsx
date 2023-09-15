import { useState } from "react";
import CustomerForm from "../auth-form/CustomerForm";
import CompanyForm from "../auth-form/CompanyForm";

export default function SignUpForm() {
  const [activeComponent, setActiveComponent] = useState("A");

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <h2 className="mb-4 fs-3 header">Sign Up to Lawn Shark</h2>
      <div className="row gy-3 mb-4">
        <div className="col-12 col-md-6 text-sm-center">
          <button
            onClick={() => handleComponentClick("A")}
            className={
              activeComponent === "A"
                ? "px-4 py-2 text-light green border rounded-pill body-font text-decoration-none"
                : "px-4 py-2 text-dark border rounded-pill body-font text-decoration-none"
            }
          >
            I am a Customer
          </button>
        </div>
        <div className="col-12 col-md-6 text-sm-center">
          <button
            onClick={() => handleComponentClick("B")}
            className={
              activeComponent === "B"
                ? "px-4 py-2 text-light green border rounded-pill body-font text-decoration-none"
                : "px-4 py-2 text-dark border rounded-pill body-font text-decoration-none"
            }
          >
            I am a Company
          </button>
        </div>
      </div>
      <hr />
      <div className="component-container">
        {activeComponent === "A" && <CustomerForm />}
        {activeComponent === "B" && <CompanyForm />}
      </div>
    </div>
  );
}
