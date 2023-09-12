import { useState } from 'react';
import {checkPassword, validateEmail} from "../../utils/auth"

function SignUpForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      }  else {
        setPassword(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) ) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      if (!checkPassword(password)) {
        setErrorMessage(
          `Choose a more secure password for the account.`
        );
        return;
      }
     
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
     
      setPassword('');
      setEmail('');
    };

    return (
        <div>
        <h2 className="fs-5">Sign Up to Lawn Shark</h2>
        <form  onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
                </label>
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <div id="emailHelp" className="form-text text-white">
                We&apos;ll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                </label>
                <input
                  value={password}
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Password"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
    </div>
    );
  }
  
  
  export default SignUpForm
  