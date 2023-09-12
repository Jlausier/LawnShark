import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CompanyCard({
  _id,
  name,
  description,
  // services,
  averageRating,
  reviewCount,
}) {
  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <Link
              to={`/CompanyProfile/${_id}`}
              className="text-decoration-none text-dark"
            >
              <h5 className="card-title fs-2">{name}</h5>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Make into a Link */}
            <Link to={`/Messages/${_id}`} className="mx-2">
              Message
            </Link>
            <span className="mx-3 fs-6">Total Reviews: {reviewCount}</span>
            {averageRating !== -1 && (
              <span className="px-4 py-2 rounded green text-light fs-5">
                {averageRating}
              </span>
            )}
          </div>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

CompanyCard.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  // services: PropTypes.arrayOf(PropTypes.object),
  averageRating: PropTypes.number,
  reviewCount: PropTypes.number,
};