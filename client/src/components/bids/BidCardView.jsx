import { Link } from "react-router-dom";
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
            <Link to={`/Messages/${company._id}`} className="mx-2">
              Message
            </Link>
            {/* Add a modal */}
            {!accepted ? (
              <button
                className="buttonMaster"
                onClick={() => handleAcceptBid(_id)}
              >
                Accept Bid
              </button>
            ) : (
              <div className="buttonMaster">Accepted</div>
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
    _id: PropTypes.string,
  }),
  accepted: PropTypes.bool.isRequired,
  handleAcceptBid: PropTypes.func.isRequired,
};
