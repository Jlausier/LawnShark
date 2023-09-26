import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { QUERY_SERVICES } from "../../utils/queries";
import { ADD_POSTING } from "../../utils/mutations";

import ServiceRadioButton from "../../components/common/ServiceRadioButton";
import RadioButton from "../../components/common/RadioButton";
import Button from "../../components/common/Button";
import { getUserRoleId } from "../../utils/auth";

export default function CreateJobPosting() {
  const navigate = useNavigate();
  const { data } = useQuery(QUERY_SERVICES);
  const [addPosting, { error }] = useMutation(ADD_POSTING, {
    refetchQueries: [
      "postingsFiltered",
      "myPostings",
      "customer",
      "customerUser",
    ],
  });

  const frequencies = [
    "One Time",
    "Monthly",
    "Bi-Monthly",
    "Weekly",
    "Bi-Weekly",
  ];
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    frequency: "One Time",
    description: "",
    askingPrice: "",
  });

  useEffect(() => {
    if (
      data &&
      data.services &&
      data.services.length > 0 &&
      services.length === 0
    ) {
      setServices(data.services);
      if (!data.services.some((s) => s._id === serviceId))
        setServiceId(data.services[0]._id);
    }
  }, [data, services.length, serviceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    setServiceId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) return;

    try {
      const { data: submitData } = await addPosting({
        variables: {
          customerId: getUserRoleId(),
          serviceId,
          askingPrice: parseInt(formData.askingPrice),
          estimatePrice: parseInt(formData.askingPrice),
          frequency: formData.frequency,
          description: formData.description,
          title: formData.title,
        },
      });

      if (submitData && submitData.addPosting && submitData.addPosting._id)
        navigate(`/JobPosting/${submitData.addPosting._id}`);
      else {
        // Handle error
      }
    } catch (err) {
      console.log(err);
    }
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
              services.map((_service) => (
                <ServiceRadioButton
                  {..._service}
                  activeId={serviceId}
                  handleChange={handleServiceChange}
                  key={_service._id}
                />
              ))}
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-3">
          <label className="form-label">Frequency</label>
          <div>
            {frequencies.map((frequency) => (
              <RadioButton
                name="frequency"
                value={frequency}
                activeValue={formData.frequency}
                handleChange={handleChange}
                key={frequency}
              />
            ))}
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
          <label htmlFor="askingPrice" className="form-label">
            Budget
          </label>
          <input
            type="number"
            className="form-control"
            id="askingPrice"
            name="askingPrice"
            value={formData.askingPrice}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          title={"Create Job Posting"}
          type="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
