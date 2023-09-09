import BidCard from  '../../components/BidCard';

export default function MyBids() {

  return (
    <>
      <div className="border p-5">
        <div className='mb-5'>
          <h2 className="border fs-1">My Bids</h2>
          {/* <span className=''>Click on job titles to view more details</span> */}
        </div>
        <div className="border">
          <BidCard />
          Cards
        </div>
      </div>
    </>
  );
}