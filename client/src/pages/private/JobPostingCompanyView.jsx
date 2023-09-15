import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COMPANY_POSTING } from "../../utils/queries";
import { getUserRoleId } from "../../utils/auth";

import CreateBid from "../../components/bids/CreateBid";
import BidCardView from "../../components/bids/BidCardView";

export default function JobPostingCompanyView() {
  const companyId = getUserRoleId();
  const { postingId } = useParams();

  const { data } = useQuery(QUERY_COMPANY_POSTING, {
    variables: { postingId, companyId },
  });

  console.log(data);

  return data ? (
    <div className="border p-4 rounded">
      <div className="row">
        <div className="col-6">
          <h2 className="header">{data.companyPosting.title}</h2>
          <span>{data.companyPosting.service.name}</span>
        </div>
        <div className="col-6 text-end">
          <span className="mx-3 fs-5">
            Total Bids: {data.companyPosting.bidCount}
          </span>
          <span className="px-4 py-2 rounded green text-light fs-4">
            ${data.companyPosting.askingPrice}
          </span>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <span>Location: {data.companyPosting.location}</span>
        <span>Frequency: {data.companyPosting.frequency}</span>
        <span> {data.companyPosting.customer.name} </span>
        <p>{data.companyPosting.description}</p>
      </div>
      <hr />
      {data.companyPosting.bids.length > 0 ? (
        data.companyPosting.bids.map((bid) => (
          <BidCardView {...bid} key={bid._id} />
        ))
      ) : (
        <div className="d-flex flex-column align-items-start">
          {/* Make the CreateBid Component Appear if the button is clicked */}
          <a className="btn green text-light" href="#" role="button">
            Place Bid
          </a>
          <CreateBid />
        </div>
      )}
    </div>
  ) : (
    <div>
      <div>damn that sucks</div>
    </div>
  );
}
