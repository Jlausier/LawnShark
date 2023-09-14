import PropTypes from "prop-types";

import JobPostingCard from "../../components/JobPostingCard";
import Button from "../../components/Button";

export default function JobPostings({ postings }) {
  return (
      <div className="border p-4 rounded">
        <div className="mb-5 row">
          <div className="col-12 col-lg-10">
            <h2 className="header">My Job Postings</h2>
          </div>
          <div className="col-12 col-lg-2">
            <Button title={"New Job Posting"} />
          </div>
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
  );
}

JobPostings.propTypes = {
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      askingPrice: PropTypes.number,
      frequency: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
