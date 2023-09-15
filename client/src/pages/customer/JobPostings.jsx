import { useQuery } from "@apollo/client";

import { getUserRoleId } from "../../utils/auth";
import { QUERY_MY_POSTINGS } from "../../utils/queries";

import JobPostingCard from "../../components/JobPostingCard";
import NavButton from "../../components/NavButton";

export default function JobPostings() {
  const customerId = getUserRoleId();

  const { data } = useQuery(QUERY_MY_POSTINGS, {
    variables: {
      customerId: customerId,
    },
  });

  return (
    <div>
      <div className="border p-4 rounded">
        <div className=" mb-5 row">
          <div className="col-12 col-lg-10">
            <h2 className="header">My Job Postings</h2>
          </div>
          <div className=" col-12 col-lg-2 text-end">
            <NavButton title={"New Job Posting"} path={"/CreateJobPosting"} />
          </div>
        </div>
        <div className="">
        {data && data.myPostings && data.myPostings.length > 0 ? (
          <div>
            {data.myPostings.map((jobs) => (
              <JobPostingCard {...jobs} key={jobs._id} />
            ))}
          </div>
        ) : (
          <div className="body-font fs-4">
            You have not made any new Job Postings.
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
}
