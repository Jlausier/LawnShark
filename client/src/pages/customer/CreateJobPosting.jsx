import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SERVICES } from "../../utils/queries";

import ServiceRadioButton from "../../components/ServiceRadioButton";
import RadioButton from "../../components/RadioButton";
import Button from "../../components/Button";

export default function CreateJobPosting() {
  const { data } = useQuery(QUERY_SERVICES);

  const frequencies = [
    "One Time",
    "Monthly",
    "Bi-Monthly",
    "Weekly",
    "Bi-Weekly",
  ];
  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    frequency: "One Time",
    description: "",
    budget: "",
  });

  useEffect(() => {
    if (
      data &&
      data.services &&
      data.services.length > 0 &&
      services.length === 0
    ) {
      setServices(data.services);
      setService(data.services[0]);
    }
  }, [data, services.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    const { value } = e.target;
    setService(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(service);
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
                  activeId={service}
                  handleChange={handleServiceChange}
                  key={service._id}
                />
              ))}
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-3">
          <label className="form-label">Frequency</label>
          <div>
            {frequencies.map((frequency) => {
              <RadioButton
                name="frequency"
                value={frequency}
                activeValue={formData.frequency}
                handleChange={handleChange}
              />;
            })}
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
