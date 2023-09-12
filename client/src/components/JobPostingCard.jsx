import PropTypes from "prop-types";

export default function JobPostingCard({
  title,
  askingPrice,
  frequency,
  description,
}) {
  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-2">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {/* {customer.location} */}
            </h6>
          </div>
          <div className="col-6 text-end d-flex flex-column align-items-end">
            <span className="px-4 py-2 rounded green text-light fs-5">
              ${askingPrice}
            </span>
            <span>{frequency}</span>
          </div>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

JobPostingCard.propTypes = {
  title: PropTypes.string,
  askingPrice: PropTypes.number,
  frequency: PropTypes.string,
  description: PropTypes.string,
};
