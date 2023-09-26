import { useState } from "react";
import LoginForm from "../components/auth-form/LoginForm";
import SignUpForm from "../components/auth-form/SignUpForm";

export default function SplashPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <div className="p-4 position-fixed top-0 start-0 d-none d-sm-block">
        <img
          src="./images/lawn-shark-logo-white-1000.png"
          className="size-sm"
        ></img>
      </div>
      <div className="min-vh-100 d-flex justify-content-center align-items-center landing-page-bg">
        <div className="p-5 row align-items-center">
          <div className="d-sm-none">
            <img
              src="./images/lawn-shark-logo-white-1000.png"
              className="size-sm"
            ></img>
          </div>
          <div className="col-sm pe-3 text-white">
            <span className="fs-4 body-font">Welcome to</span>
            <h1 className="header-landing">LawnShark</h1>
            <span className="pb-4 fs-4 body-font">
              Where the professionals come to you!
            </span>
            <p className="body-font">
              Input a bid on the work you need done, and the professionals will
              come to you.{" "}
            </p>
          </div>
          <div className="py-5 p-4 border border-1 rounded bg-light col d-flex flex-column">
            {showLoginForm ? <LoginForm /> : <SignUpForm />}
            <hr />
            <div className="d-flex align-items-center">
              <span className="d-inline pe-2">
                {showLoginForm
                  ? "Don't have an account?"
                  : "Already have an account with us?"}
              </span>
              <button
                onClick={toggleForms}
                className="btn border rounded-pill green-border green-color text-dark fs-6 header"
              >
                {showLoginForm ? "Sign Up" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
