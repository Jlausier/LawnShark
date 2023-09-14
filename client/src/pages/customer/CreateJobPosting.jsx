import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SERVICES } from "../../utils/queries";

import ServiceRadioButton from "../../components/ServiceRadioButton";
import Button from "../../components/Button";

export default function CreateJobPosting() {
  const { data } = useQuery(QUERY_SERVICES);

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    service: "",
    frequency: "one_time",
    description: "",
    budget: "",
  });

  useEffect(() => {
    if (data && data.services && services.length === 0)
      setServices(data.services);
  }, [data, services.length]);

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
    alert("Oh Boy!");
  };

  return (
    <div className="p-4 border rounded">
      <div className="mb-5 d-flex justify-content-between align-items-start">
        <h2 className="header">Create a New Job Post</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Service */}
        <div className="mb-3">
          <label className="form-label">Service</label>
          <div>
            {services.length > 0 &&
              services.map((service) => (
                <ServiceRadioButton
                  {...service}
                  activeId={formData.service}
                  handleChange={handleChange}
                  key={service._id}
                />
              ))}
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-3">
          <label className="form-label">Frequency</label>
          <div>
            <div className="form-check">
              <input
                type="radio"
                id="one_time"
                name="frequency"
                value="one_time"
                checked={formData.frequency === "one_time"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="one_time" className="form-check-label">
                One Time
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="monthly"
                name="frequency"
                value="monthly"
                checked={formData.frequency === "monthly"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="monthly" className="form-check-label">
                Monthly
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="bi_monthly"
                name="frequency"
                value="bi_monthly"
                checked={formData.frequency === "bi_monthly"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="bi_monthly" className="form-check-label">
                Bi-Monthly
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="weekly"
                name="frequency"
                value="weekly"
                checked={formData.frequency === "weekly"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="weekly" className="form-check-label">
                Weekly
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="bi_weekly"
                name="frequency"
                value="bi_weekly"
                checked={formData.frequency === "bi_weekly"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="bi_weekly" className="form-check-label">
                Bi-Weekly
              </label>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Budget */}
        <div className="mb-3">
          <label htmlFor="budget" className="form-label">
            Budget
          </label>
          <input
            type="number"
            className="form-control"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <Button title={"Create Job Posting"} onSubmit={handleSubmit} />
      </form>
    </div>
  );
}
