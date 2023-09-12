/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
//import { QUERY_POSTINGS_FILTERED} from "../../utils/queries";
import JobPostingCard from "../../components/JobPostingCard";

export default function FindWork() {
  //const {data} = useQuery(QUERY_POSTINGS)
  return (
    <div className=" p-5">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className=" fs-1">Find Work</h2>
          <span className="">Click on job titles to view more details</span>
        </div>
        <div className=" mb-3">
          <span className="pe-2">Filter Results:</span>

          <a className="pe-2 ">Lawn Work</a>
          <a className="pe-2">Tree Trimming</a>
          <a className="pe-2">Power Washing</a>
          <a className="pe-2">Fertilizing</a>
        </div>
        
      </div>
    </div>
  );
}
