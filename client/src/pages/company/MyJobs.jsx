import { useQuery } from "@apollo/client";
import {getUserRoleId} from "../../utils/auth";
import { QUERY_MY_ACCEPTED_BIDS } from "../../utils/queries";
import BidCard from  '../../components/bids/BidCard';

export default function MyJobs() {
    const companyId = getUserRoleId();
    const { data } = useQuery(QUERY_MY_ACCEPTED_BIDS, {
    variables: {
      companyId: companyId, 
    },
  });
  console.log(data);

  return (
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className="header">My Jobs</h2>
          </div>
          <div className="">
          {data && data.myAcceptedBids && data.myAcceptedBids.length > 0 ? (
            <div>
              {data.myAcceptedBids.map((bids) => (
                <BidCard {...bids} key={bids._id} />
              ))}
            </div>
          ) : (
            <div>No new bids have been accepted.</div>
          )}
          </div>
        </div>
  );
}
