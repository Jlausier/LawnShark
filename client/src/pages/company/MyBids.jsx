import { useQuery } from "@apollo/client";

import { QUERY_MY_BIDS } from "../../utils/queries";
import BidCard from  '../../components/bids/BidCard';

export default function MyBids() {
  const { data } = useQuery(QUERY_MY_BIDS, {
    variables: {
      companyId: "",
    },
  });
  console.log(data);

  return (
      <div className=" p-5">
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className="header">My Bids</h2>
          </div>
          <div className="">
            {/* <BidCard /> */}
            {data && data.myBids && data.myBids.length > 0 ? (
            <div>
              {data.myBids.map((bids) => (
                <BidCard {...bids} key={bids._id} />
              ))}
            </div>
          ) : (
            <div className="body-font fs-4">You have not made any new bids.</div>
          )}
          </div>
        </div>
      </div>
  );
}