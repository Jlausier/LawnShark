/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";

import { QUERY_POSTINGS_FILTERED } from "../../utils/queries";

import { useState } from "react"

import { usePostingsSearch } from "../../hooks/usePostings.js";
import JobPostingCard from "../../components/JobPostingCard";


export default function FindWork() {

    const { data } = useQuery(QUERY_MY_BIDS, {
      variables: {
        companyId: "",
      },
    });
    console.log(data);

  const postings = usePostingsSearch
  return (
    <div className=" p-5">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className=" fs-1">Find Work</h2>
          <span className="">Click on job titles to view more details</span>
        </div>
        <div className=" mb-3">
          <span className="pe-2">Filter Results:</span>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Lawn Work
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Tree Timming
            </label>
          </div><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Pressure-Washing
            </label>
          </div><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Fertilizing
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
