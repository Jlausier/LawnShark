/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import { QUERY_SERVICES, QUERY_POSTINGS_FILTERED } from "../../utils/queries";
import { usePostingsSearch } from "../../hooks/usePostings.js";

import CompanyJobPostingCard from "../../components/company-view/JobPostingCard";
import Skeleton from "react-loading-skeleton";

export default function FindWork() {

  const { data } = useQuery(QUERY_SERVICES);
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
  const { data: postings, loading } = usePostingsSearch(searchOptions);

  return (
    <div className="border p-4 rounded">
      <div className="mb-5">
        <h2 className="header">Find Work</h2>
        <span className="">Click on job titles to view more details</span>
      </div>
      <span className="pe-2">Filter Results:</span>
      {data && data.services && data.services.length > 0 ? (
        <div className="mb-3">
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
      <hr />
      <div>
        {postings &&
        postings.postingsFiltered &&
        postings.postingsFiltered.length > 0 ? (
          <div>
            {postings.postingsFiltered.map((posting) => (
              <CompanyJobPostingCard {...posting} key={posting._id} />
            ))}
          </div>
        ) : (
          <div className="body-font fs-4"> There are no new Job Postings. </div>
        )}
        {!postings && [1,2,3].map((n) => <Skeleton className={"card-body mb-3"} height={160} key={n} />)}
      </div>
    </div>
  );
}
