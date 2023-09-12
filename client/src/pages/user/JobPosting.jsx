import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { getUserRole } from "../../utils/auth";
import { QUERY_POSTING } from "../../utils/queries";
import { postingHasCompanyBid } from "../../utils/dataValidation";

import CreateBid from "../../components/bids/CreateBid";

export default function JobPosting() {
  // eslint-disable-next-line no-unused-vars
  const userRole = getUserRole();

  const { postingId } = useParams();
  const { data } = useQuery(QUERY_POSTING, {
    variables: { postingId },
  });

  return data ? (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="row">
          <div className="col-6">
            <h2 className=" fs-1">{data.posting.title}</h2>
            <span>{data.posting.service.name}</span>
          </div>
          <div className="col-6 text-end">
            <span className="mx-3 fs-5">
              Total Bids: {data.posting.bidCount}
            </span>
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
        {!postingHasCompanyBid(userRole, data.posting.bids) && <CreateBid />}
      </div>
    </div>
  ) : (
    <div>damn that sucks</div>
  );
}
