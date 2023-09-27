import { useQuery } from "@apollo/client";

import { getUserRoleId } from "../../utils/auth";
import { QUERY_MY_ACCEPTED_BIDS } from "../../utils/queries";

import CompanyBidCard from "../../components/company-view/BidCard";
import Skeleton from "react-loading-skeleton";


export default function MyJobs() {
  const companyId = getUserRoleId();
  const { data, loading } = useQuery(QUERY_MY_ACCEPTED_BIDS, {
    variables: {
      companyId: companyId,
      accepted: true,
    },
  });
  console.log(data);

  return (
    <div className="border p-4 rounded">
      <div className="mb-5">
        <h2 className="header">My Jobs</h2>
      </div>
      <div className="">
        {data && data.myAcceptedBids && data.myAcceptedBids.length > 0 ? (
          <div>
            {data.myAcceptedBids.map((bids) => (
              <CompanyBidCard {...bids} key={bids._id} />
            ))}
          </div>
        ) : (
          <div>No new bids have been accepted.</div>
        )}
        {loading && [1,2,3].map((n) => <Skeleton className={"card-body mb-3"} height={280} key={n} />)}
      </div>
    </div>
  );
}
