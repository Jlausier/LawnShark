import BidCard from  '../../components/BidCard';

export default function MyBids() {

  return (
      <div className=" p-5">
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className=" fs-1">My Bids</h2>
          </div>
          <div className="">
            <BidCard />
 
          </div>
        </div>
      </div>
  );
}