import PropTypes from "prop-types";

import LinkCard from "../common/LinkCard";

export default function CustomerJobPostingCard({
  _id,
  title,
  askingPrice,
  frequency,
  description,
}) {
  return (
    <LinkCard to={`/JobPosting/${_id}`}>
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title body-font fs-2">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {/* {customer.location} */}
            </h6>
          </div>
          <div className="col-6 text-end d-flex flex-column align-items-end">
            <span className="px-4 py-2 rounded green body-font text-light fs-5">
              ${askingPrice}
            </span>
            <span>{frequency}</span>
          </div>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </LinkCard>
  );
}

CustomerJobPostingCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  askingPrice: PropTypes.number.isRequired,
  frequency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
