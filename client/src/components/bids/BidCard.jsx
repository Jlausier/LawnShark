import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { createLocationString } from "../../utils/dataValidation";

export default function BidCard({ amount, posting }) {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    transition: "0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#d2f7d5",
  };

  return (
    <Link
      to={`/JobPosting/${posting._id}`}
      style={isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-3 card w-100"
    >
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-3">{posting.title}</h5>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="px-4 py-2 rounded fs-5">
              Asking Price:${posting.askingPrice}
            </span>
            <span className="px-4 py-2 rounded green text-light fs-5">
              Bid:${amount}
            </span>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-4">
            <span className="card-text">
              Location: {createLocationString(posting.customer.location)}
            </span>
          </div>
          <div className="col-4">
            <span className="card-text">Frequency: {posting.frequency}</span>
          </div>
        </div>
        <span>Description:</span>
        <p className="card-text">{posting.description}</p>
      </div>
    </Link>
  );
}

BidCard.propTypes = {
  _id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  posting: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    askingPrice: PropTypes.number.isRequired,
    frequency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
