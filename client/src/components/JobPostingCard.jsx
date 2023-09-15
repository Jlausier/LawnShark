import { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function JobPostingCard({
  _id,
  title,
  askingPrice,
  frequency,
  description,
}) {

  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    transition: "0.3s"
  };

  const linkHoverStyle = {
    backgroundColor: "#d2f7d5"
  }

  return (
    <Link 
      to={`/JobPosting/${_id}`} 
      style={isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-3 card w-100"
    >
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
    </Link>
  );
}

JobPostingCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  askingPrice: PropTypes.number.isRequired,
  frequency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
