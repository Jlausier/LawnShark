import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_POSTING } from "../../utils/queries";
import { getUserRoleId } from "../../utils/auth";
// eslint-disable-next-line no-unused-vars
import { postingHasCompanyBid } from "../../utils/dataValidation";

import BidCardView from "../../components/bids/BidCardView";

export default function JobPosting() {
  const roleId = getUserRoleId();

  const { postingId } = useParams();
  const { data } = useQuery(QUERY_POSTING, {
    variables: { postingId },
  });

  return data ? (
    <div className="border p-4 rounded">
      <div className="row">
        <div className="col-6">
          <h2 className="header">{data.posting.title}</h2>
          <span>{data.posting.service.name}</span>
        </div>
        <div className="col-6 text-end">
          <span className="mx-3 fs-5">Total Bids: {data.posting.bidCount}</span>
          <span className="px-4 py-2 rounded green text-light fs-4">
            ${data.posting.askingPrice}
          </span>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <span>Location: {data.posting.customer.location}</span>
        <span>Frequency: {data.posting.frequency}</span>
        <span> {data.posting.customer.name} </span>
        <p>{data.posting.description}</p>
      </div>
      <hr />
      <div>
        <h6>Live Bids</h6>
        <BidCardView />
      </div>
    </div>
  ) : (
    <div>
      <div>damn that sucks</div>
    </div>
  );
}
