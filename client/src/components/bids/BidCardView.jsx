import "../../index.css";
import PropTypes from "prop-types";
export default function BidCardView({
  _id,
  title,
  askingPrice,
  frequency,
  description,
})

  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-6">{bid.company.name}</h5>
            <span className="fs-1 pe-2">${ bid.amount }</span><span>proposed budget</span>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Make into a Link */}
            <a href="/Messages" className="mx-2">Message</a>
            {/* Make button a component */}
            {/* Add a modal */}
            <a
            className="btn green text-light"
            href="/CreateJobPosting"
            role="button"
          >
            Accept Bid
          </a>
          </div>
        </div>
        <span>Message:</span>
        <p className="card-text">{ bid.message }</p>
      </div>
    </div>
  );

  BidCardView.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    askingPrice: PropTypes.number.isRequired,
    frequency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  



