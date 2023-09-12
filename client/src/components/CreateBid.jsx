/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddBid } from "../hooks/useBids";

export default function CreateBid() {
  const { postingId } = useParams();

  const [formData, setFormData] = useState({
    proposedAmount: "",
    message: "",
  });

  /** @TODO handle error with mutation usage */
  const { createBid, error } = useAddBid();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /** @TODO validate form data */
    const { proposedAmount, message } = formData;

    createBid({
      amount: parseInt(proposedAmount) || -1,
      message,
      postingId,
    }).catch((err) => {
      /** @TODO display error if bid cannot be created */
      console.error(err);
    });
  };

  return (
    <div className="mt-3">
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
