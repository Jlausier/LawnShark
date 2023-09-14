import { useQuery } from "@apollo/client";
import { QUERY_MY_POSTINGS } from "../../utils/queries"
import JobPostingCard from "../../components/JobPostingCard";
import Button from "../../components/Button";

export default function JobPostings({ postings }) {

   const { data } = useQuery(QUERY_MY_POSTINGS, {
     variables: {
       customerId: "650252708a4622c7fcfd3fb6",
     },
   });
   console.log(data);

  return (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="mb-5 d-flex justify-content-between align-items-start">
          <h2 className="header">My Job Postings</h2>
          <Button title={"New Job Posting"} />
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

