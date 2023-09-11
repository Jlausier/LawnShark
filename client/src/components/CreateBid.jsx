import React, { useState } from 'react';

export default function CreateBid() {
  const [formData, setFormData] = useState({
    proposedAmount: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className='mt-3'>
        <form onSubmit={handleSubmit}>
        {/* Proposed Amount */}
        <div className="mb-3">
          <label htmlFor="proposedAmount" className="form-label">
            Proposed Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="proposedAmount"
            name="proposedAmount"
            value={formData.proposedAmount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn green text-light">
          Submit
        </button>
      </form>
    </div>
      
  );
}
