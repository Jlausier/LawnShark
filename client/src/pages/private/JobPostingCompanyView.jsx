import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COMPANY_POSTING } from "../../utils/queries";
import { getUserRoleId } from "../../utils/auth";
import { createLocationString } from "../../utils/dataValidation";
import useRemoveBid from "../../hooks/useRemoveBid";

import CreateBid from "../../components/company-view/CreateBid";
import CompanyBidStub from "../../components/company-view/BidStub";

export default function JobPostingCompanyView() {
  const companyId = getUserRoleId();
  const { postingId } = useParams();

  const { data } = useQuery(QUERY_COMPANY_POSTING, {
    variables: { postingId, companyId },
  });

  const { removeBid } = useRemoveBid();

  return data && data.companyPosting ? (
    <div className="border p-4 rounded">
      <div className="row">
        <div className="col-6">
          <h2 className="header">{data.companyPosting.title}</h2>
          <span className="px-3 py-1 border border-2 text-secondary body-font rounded-pill">
            {data.companyPosting.service.name}
          </span>
        </div>
        <div className="col-6 text-end">
          <span className="mx-3 fs-5">
            Total Bids: {data.companyPosting.bidCount}
          </span>
          <span className="px-4 py-2 body-font rounded green text-light fs-4">
            ${data.companyPosting.askingPrice}
          </span>
        </div>
      </div>
      <hr />
      <div className="row mb-2">
        <div className="col-1">Client:</div>
        <div className="col-10">
          <span>{data.companyPosting.customer.name}</span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">
          <span>Location:</span>
        </div>
        <div className="col-10">
          <span>
            {data.companyPosting.customer.location &&
              createLocationString(data.companyPosting.customer.location)}
          </span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">Frequency:</div>
        <div className="col-10">
          <span>{data.companyPosting.frequency}</span>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-1">Description:</div>
        <div className="col-10">
          <p>{data.companyPosting.description}</p>
        </div>
      </div>
      <hr />
      {data.companyPosting.bids.length > 0 ? (
        data.companyPosting.bids.map((bid) => (
          <CompanyBidStub
            {...bid}
            handleDeleteBid={removeBid}
            posting={data.companyPosting}
            key={bid._id}
          />
        ))
      ) : (
        <div className="d-flex flex-column align-items-start">
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
