import PropTypes from "prop-types";

import LinkCard from "../common/LinkCard";

/**
 * @TODO - Display accepted status
 * @TODO - Implement delete bid button
 */

export default function CompanyBidStub({
  _id,
  amount,
  posting,
  accepted,
  handleDeleteBid,
}) {
  const deleteBid = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleDeleteBid(_id);
  };

  return (
    <LinkCard to={`/JobPosting/${posting._id}`}>
      <div className="card-body">
        <div className="row my-3">
          <div className="col-6">
            <h5 className="card-title body-font fs-3">{posting.title}</h5>
            {accepted ? (
              <span className="text-secondary fst-italic">Accepted</span>
            ) : (
              <span className="text-secondary fst-italic">Pending</span>
            )}
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="px-4 py-2 body-font rounded fs-5">
              Asking Price: ${posting.askingPrice}
            </span>
            <span className="px-4 py-2 body-font rounded green text-light fs-5">
              Bid: ${amount}
            </span>
            <button
              onClick={deleteBid}
              className={"border-0 ms-4 rounded-pill delete-button"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </LinkCard>
  );
}

CompanyBidStub.propTypes = {
  _id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  accepted: PropTypes.bool.isRequired,
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
  handleDeleteBid: PropTypes.func.isRequired,
};
