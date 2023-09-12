import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import { data.posting } from "../../utils/testData";
import { QUERY_POSTING } from "../../utils/queries";

import CreateBid from "../../components/bids/CreateBid";

export default function JobPosting() {
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
              Total Bids: {data.posting.bids.length}
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
        <div className="d-flex flex-column align-items-start">
          {/* Make the CreateBid Component Appear if the button is clicked */}
          <a className="btn green text-light" href="#" role="button">
            Place Bid
          </a>
          <CreateBid />
        </div>
      </div>
    </div>
  ) : (
    <div>damn that sucks</div>
  );
}
