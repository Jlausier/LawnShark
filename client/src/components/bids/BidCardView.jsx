import PropTypes from "prop-types";

export default function BidCardView({
  _id,
  amount,
  company,
  accepted,
  handleAcceptBid,
}) {
  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-6">{company.name}</h5>
            <span className="fs-1 pe-2">${amount}</span>
            <span>proposed budget</span>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Make into a Link */}
            <a href="/Messages" className="mx-2">
              Message
            </a>
            {/* Add a modal */}
            {!accepted && (
              <button
                className="btn green text-light"
                onClick={() => handleAcceptBid(_id)}
              >
                Accept Bid
              </button>
            )}
          </div>
        </div>
        {/* <span>Message:</span>
        <p className="card-text">{}</p> */}
      </div>
    </div>
  );
}

BidCardView.propTypes = {
  _id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  accepted: PropTypes.bool.isRequired,
  handleAcceptBid: PropTypes.func.isRequired,
};
