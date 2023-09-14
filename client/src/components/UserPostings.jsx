import PropTypes from "prop-types";

import JobPostingCard from "./JobPostingCard";

export default function UserPostings({ postings }) {
  return (
    <>
      {postings && postings.length > 0 ? (
        <div>
          {postings.map((posting) => (
            <JobPostingCard {...posting} key={posting._id} />
          ))}
        </div>
      ) : (
        <div>You have not made any Job Postings.</div>
      )}
    </>
  );
}

UserPostings.propTypes = {
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
