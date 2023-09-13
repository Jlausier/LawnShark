/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";

import { QUERY_POSTINGS_FILTERED } from "../../utils/queries";

import { useState } from "react"

import { usePostingsSearch } from "../../hooks/usePostings.js";
import JobPostingCard from "../../components/JobPostingCard";
import FilterCheckBox from "../../components/FilterCheckBox";


export default function FindWork() {

    const { data } = useQuery(QUERY_POSTINGS_FILTERED, {
      variables: {
        services: "",
      },
    });
    console.log(data);

  const postings = usePostingsSearch
  return (
    <div className=" p-5">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className="header">Find Work</h2>
          <span className="body-font">Click on job titles to view more details</span>
        </div>
        <div className="d-flex mb-3">
          <span className="pe-2">Filter Results:</span>
          <FilterCheckBox title={"Lawn Care"} value={""} />
          <FilterCheckBox title={"Tree Trimming"} value={""} />
          <FilterCheckBox title={"Pressure-Washing"} value={""} />
          <FilterCheckBox title={"Fertilizing"} value={""} />
        </div>
        <div>
          {data && data.Posting && data.Posting.length > 0 ? (
            <div>
              {data.Posting.map((postings) => (
                <JobPostingCard {...postings} key={postings._id} />
              ))}
            </div>
          ) : (
            <div className="fs-4 body-font">There are no available job postings. Check again later!</div>
          )}
        </div>
      </div>
    </div>
  );
}
