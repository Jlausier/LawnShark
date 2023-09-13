import BidCard from  '../../components/bids/BidCard';

export default function MyBids() {

  return (
      <div className=" p-5">
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className=" fs-1">My Bids</h2>
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
            <div>No job postings...</div>
          )}
          </div>
        </div>
      </div>
  );
}