import { useState } from 'react';
import {checkPassword, validateEmail} from "../../utils/auth"
import Button from "../Button";

export default function CompanyForm() {

    const [selectedState, setSelectedState] = useState('');

    const stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  
    const stateOptions = stateNames.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));
  
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
    };
  
    const handleSubmit = () => {
      alert("Submit Form");
    }
      // Create state variables for the fields in the form
      // We are also setting their initial values to an empty string
      const [cname, setCname] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [bio, setBio] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
  
      
      const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputName === 'email') {
          setEmail(inputValue);
        }  
        else if (inputName == 'password') {
          setPassword(inputValue);
        }
        else if (inputName == 'cname') {
            setCname(inputValue);
          } else {
            setBio(inputValue);
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
    <form  onSubmit={handleFormSubmit}>
    <div className='row mb-4'>
      <div className='col-6'>
        <div className="">
          <label htmlFor="emailInput" className="form-label body-font">
          Email Address
          </label>
          <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="form-control"
          />
        </div>
      </div>
      <div className='col-6'>
        <div className="">
          <label htmlFor="passwordInput" className="form-label body-font">
          Password
          </label>
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            className="form-control"
          />
        </div>
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <div className="">
          <label htmlFor="cnameInput" className="form-label body-font">
          Company Name
          </label>
          <input
          value={cname}
          name="cname"
          onChange={handleInputChange}
          type="text"
          className="form-control"
          />
        </div>
      </div>
    </div>

      <div className='row mb-2'>
          <div className='col'>
            <label htmlFor="bioInput" className="form-label body-font">
            Company Bio
            </label>
            <textarea
            value={bio}
            name="bio"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            rows="4"
            cols="50"
            />
          </div>
      </div>
    <Button title={"Submit"} onClick={handleSubmit}/>
</form>
  );
}
