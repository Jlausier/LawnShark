/* eslint-disable no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_POSTING } from "../../utils/queries";
import { getUserRole, getUserRoleId } from "../../utils/auth";

import CustomerBidCard from "../../components/customer-view/BidCard";
import { createLocationString } from "../../utils/dataValidation";
import { ACCEPT_BID } from "../../utils/mutations";

export default function JobPosting() {
  const roleId = getUserRoleId();
  const userRole = getUserRole();
  const { postingId } = useParams();

  const [acceptBid, { error: acceptBidError }] = useMutation(ACCEPT_BID, {
    refetchQueries: ["postings", "posting", "myPostings", "myActivePostings"],
  });

  const { data, error } = useQuery(QUERY_POSTING, {
    variables: { postingId, roleId, userRole },
  });

  const handleAcceptBid = async (bidId) => {
    try {
      const { data } = await acceptBid({
        variables: { bidId },
      });
      if (data) {
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return error ? (
    <Navigate to="/" />
  ) : data && data.posting ? (
    <div className="py-4">
      <div className="row">
        <div className="col-6">
          <h2 className="secondary-header">{data.posting.title}</h2>
          <span className="px-3 py-1 border border-2 text-secondary body-font rounded-pill">
            {data.posting.service.name}
          </span>
        </div>
        <div className="col-6 text-end">
          <span className="mx-3 fs-5">
            Total Bids: {data.posting.bids.length}
          </span>
          <span className="px-4 py-2 body-font rounded green text-light fs-4">
            ${data.posting.askingPrice}
          </span>
        </div>
      </div>
      <hr />
      <div className="row mb-2">
        <div className="col-1">Client:</div>
        <div className="col-10">
          <span>{data.posting.customer.name}</span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <span>Location:</span>
        </div>
        <div className="col-10">
          <span>
            {data.posting.customer.location &&
              createLocationString(data.posting.customer.location)}
          </span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">Frequency:</div>
        <div className="col-10">
          <span>{data.posting.frequency}</span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">Description:</div>
        <div className="col-10">
          <p>{data.posting.description}</p>
        </div>
      </div>

      <hr />
      <div>
        <h5 className="body-font">Live Bids</h5>
        {data.posting.bids &&
          data.posting.bids.map((bid) => (
            <CustomerBidCard
              {...bid}
              handleAcceptBid={handleAcceptBid}
              key={bid._id}
            />
          ))}
      </div>
    </div>
  ) : (
    <div>
      <div>damn that sucks</div>
    </div>
  );
}
