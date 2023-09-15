/* eslint-disable no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_POSTING } from "../../utils/queries";
import { getUserRole, getUserRoleId } from "../../utils/auth";

import BidCardView from "../../components/bids/BidCardView";
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
    <div className="border p-4 rounded">
      <div className="row">
        <div className="col-6">
          <h2 className="header">{data.posting.title}</h2>
          <span>{data.posting.service.name}</span>
        </div>
        <div className="col-6 text-end">
          <span className="mx-3 fs-5">
            Total Bids: {data.posting.bids.length}
          </span>
          <span className="px-4 py-2 rounded green text-light fs-4">
            ${data.posting.askingPrice}
          </span>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <span>
          Location:{" "}
          {data.posting.customer.location &&
            createLocationString(data.posting.customer.location)}
        </span>
        <span>Frequency: {data.posting.frequency}</span>
        <span>{data.posting.customer.name}</span>
        <p>{data.posting.description}</p>
      </div>
      <hr />
      <div>
        <h6>Live Bids</h6>
        {data.posting.bids &&
          data.posting.bids.map((bid) => (
            <BidCardView
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
