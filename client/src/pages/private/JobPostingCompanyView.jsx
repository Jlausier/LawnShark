import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_POSTING } from "../../utils/queries";
import { postingHasCompanyBid } from "../../utils/dataValidation";

import CreateBid from "../../components/bids/CreateBid";
import BidCardView from "../../components/bids/BidCardView";

export default function JobPostingCompanyView() {
  const { postingId } = useParams();
  const { data } = useQuery(QUERY_POSTING, {
    variables: { postingId },
  });
console.log(data)
  return data ? (
      <div className="border p-4 rounded">
        <div className="row">
          <div className="col-6">
            <h2 className="header">{data.posting.title}</h2>
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
          <span>Location: {data.posting.location}</span>
          <span>Frequency: {data.posting.frequency}</span>
          <span> {data.posting.customer.name} </span>
          <p>{data.posting.description}</p>
        </div>
        <hr />
        {!postingHasCompanyBid(data.posting.bids) &&  (
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
