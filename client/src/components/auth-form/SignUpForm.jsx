import { useState } from 'react';
import {checkPassword, validateEmail} from "../../utils/auth"
import Button from "../Button";
import CustomerForm from '../auth-form/CustomerForm';
import CompanyForm from '../auth-form/CompanyForm';


function SignUpForm() {
  
  const [showCustomerForm, setShowCustomerForm] = useState(true)

  const toggleForms = () => {
    setShowCustomerForm(!showCustomerForm);
  }

    return (
        <div>
        <h2 className="mb-4 fs-3 header">Sign Up to Lawn Shark</h2>
            <div className='d-flex justify-content-evenly mb-4'>
              <button onClick={toggleForms} className="px-4 py-2 text-dark border rounded-pill body-font text-decoration-none">
                I am a Customer
              </button>
              <button onClick={toggleForms} className="px-4 py-2 text-dark border rounded-pill body-font text-decoration-none">
                I am a Company
              </button>
            </div>
            <hr/>
            {showCustomerForm ? <CustomerForm /> : <CompanyForm />}
    </div>
    );
  }
  
  
  export default SignUpForm
  