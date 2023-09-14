

import JobPostingCard from "../../components/JobPostingCard";
import Button from "../../components/Button";

export default function JobPostings({ postings }) {
  return (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="mb-5 d-flex justify-content-between align-items-start">
          <h2 className="header">My Job Postings</h2>
          <Button title={"New Job Posting"} />
        </div>
        <div className="">
          {postings ? (
            <div>
              {postings.map((posting) => (
                <JobPostingCard {...posting} key={posting._id} />
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

