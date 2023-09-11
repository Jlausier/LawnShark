import React from "react"; // Import React

import "../index.css";

export default function SplashPage() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center landing-page-bg">
      <div className="row rounded">
        <div className="col rounded text-white">
          <span>Welcome to</span>
          <h1>Lawn Shark</h1>
          <span className="pb-4">Make the professionals come to you!</span>
          <p>Input a bid on the work you need done, and the professionals will come to you. </p>
        </div>
        <div className="p-4 border border-1 rounded bg-light col d-flex flex-column">
          <h2 className="fs-5">Log in to Lawn Shark</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <hr />

          <div>
            <span>Don't have an account? </span>
            <a>Sign-up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
