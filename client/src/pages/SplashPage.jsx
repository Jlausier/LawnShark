import { React, useState } from "react"; // Import React
import LoginForm from "../components/auth-form/LoginForm";
import SignUpForm from "../components/auth-form/SignUpForm";

import "../index.css";



export default function SplashPage() {

  const [showLoginForm, setShowLoginForm] = useState(true)

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center landing-page-bg">
      <div className="d-flex align-items-center">
        <div className="col pe-3 text-white">
          <span>Welcome to</span>
          <h1>Lawn Shark</h1>
          <span className="pb-4">Make the professionals come to you!</span>
          <p>Input a bid on the work you need done, and the professionals will come to you. </p>
        </div>
        <div className="p-4 border border-1 rounded bg-light col d-flex flex-column">
          
          {showLoginForm ? <LoginForm /> : <SignUpForm />}
          <hr />
          <div>
            <span className="d-inline">Don't have an account? </span>
            <button onClick={toggleForms}>Toggle Component</button>
          </div>
        </div>
      </div>
    </div>
  );
}
