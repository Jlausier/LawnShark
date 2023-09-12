import { useQuery } from "@apollo/client";

import { QUERY_MY_POSTINGS } from "../../utils/queries";
import JobPostingCard from "../../components/JobPostingCard";
import Button from "../../components/Button";

export default function JobPostings() {
  const { data } = useQuery(QUERY_MY_POSTINGS, {
    variables: {
      customerId: "64ffdd99efba6db008dce024",
    },
  });
  console.log(data);

  return (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="mb-5 d-flex justify-content-between align-items-start">
          <h2 className=" fs-1">My Job Postings</h2>
          <Button title={"New Job Posting"} />
        </div>
        <div className="">
          {data && data.myPostings && data.myPostings.length > 0 ? (
            <div>
              {data.myPostings.map((posting) => (
                <JobPostingCard {...posting} key={posting._id} />
              ))}
            </div>
          ) : (
            <div>No job postings...</div>
          )}
        </div>
      </div>
    </div>
  );
}
