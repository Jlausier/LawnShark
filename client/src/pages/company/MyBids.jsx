import { useQuery } from "@apollo/client";

import { getUserRoleId } from "../../utils/auth";
import { QUERY_MY_BIDS } from "../../utils/queries";
import useRemoveBid from "../../hooks/useRemoveBid";

import CompanyBidCard from "../../components/company-view/BidCard";

export default function MyBids() {
  const companyId = getUserRoleId();

  const { data } = useQuery(QUERY_MY_BIDS, {
    variables: {
      companyId: companyId,
      accepted: false,
    },
  });

  const { removeBid } = useRemoveBid();

  return (
    <div className="border p-4 rounded">
      <div className="mb-5">
        <h2 className="header">My Bids</h2>
      </div>
      <div className="">
        {data && data.myBids && data.myBids.length > 0 ? (
          <div>
            {data.myBids.map((bid) => (
              <CompanyBidCard
                handleDeleteBid={removeBid}
                {...bid}
                key={bid._id}
              />
            ))}
          </div>
        ) : (
          <div className="body-font fs-4">You have not made any new bids.</div>
        )}
      </div>
    </div>
  );
}
