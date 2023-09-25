import PropTypes from "prop-types";

import CustomerJobPostingCard from "./JobPostingCard";

export default function CustomerPostings({ postings }) {
  return (
    <>
      {postings && postings.length > 0 ? (
        <div>
          {postings.map((posting) => (
            <CustomerJobPostingCard {...posting} key={posting._id} />
          ))}
        </div>
      ) : (
        <div>You have not made any Job Postings.</div>
      )}
    </>
  );
}

CustomerPostings.propTypes = {
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
