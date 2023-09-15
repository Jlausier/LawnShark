import PropTypes from "prop-types";

export default function ReviewCard({
  customer,
  createdAt,
  rating,
  reviewText,
}) {
  return (
    <div className="mb-3 card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-5">{customer.name}</h5>
            <h6 className="card-subtitle fs-6 text-muted">{createdAt}</h6>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="px-4 py-2 rounded green text-light fs-6">
              {rating}
            </span>
          </div>
        </div>
        <p className="card-text">{reviewText}</p>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  rating: PropTypes.number,
  reviewText: PropTypes.string,
};
