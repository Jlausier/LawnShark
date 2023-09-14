/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../../utils/queries";
import { useState, useEffect } from "react"; // Import useEffect

import { usePostingsSearch } from "../../hooks/usePostings.js";
import JobPostingCard from "../../components/JobPostingCard";

export default function FindWork() {
 
  const { data } =  useQuery(QUERY_SERVICES);
  console.log(data)
  // Initialize state for checked services
  const [checkedState, setCheckedState] = useState({});

  const handleOnChange = (serviceId) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [serviceId]: !prevState[serviceId],
    }));
  };

  // Use useEffect to watch for changes in checkedState and update searchOptions
  useEffect(() => {
    const selectedServices = Object.keys(checkedState).filter(
      (serviceId) => checkedState[serviceId]
    );

    setSearchOptions({ service: selectedServices });
  }, [checkedState]);

  // Initialize state for search options
  const [searchOptions, setSearchOptions] = useState({
    service: [],
  });

  // Fetch postings based on search options
  const postings = usePostingsSearch(searchOptions);
  console.log(postings);
  console.log(data)
  return (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className="header">Find Work</h2>
          <span className="">Click on job titles to view more details</span>
        </div>
        {data && data.services && data.services.length > 0 ? (
          <div className="mb-3">
            <span className="pe-2">Filter Results:</span>
            {data.services.map((service) => (
              <div className="form-check" key={service._id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={service._id}
                  name={service.name}
                  onChange={() => handleOnChange(service._id)}
                  checked={checkedState[service._id]}
                />
                <label className="form-check-label" htmlFor={service._id}>
                  {service.name}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div> </div>
        )}
        <hr/>
        <div>
        {postings && postings.postingsFiltered && postings.postingsFiltered.length > 0 ? (
          <div>
            {postings.postingsFiltered.map((posting) => (
              <JobPostingCard {...posting} key={posting._id} />
            ))}
          </div>
        ) : (
          <div className="body-font fs-4"> There are no new Job Postings. </div>
        )}
        </div>
      </div>
      
    </div>
  );
}








