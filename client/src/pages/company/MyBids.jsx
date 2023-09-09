import BidCard from  '../../components/BidCard';

export default function MyBids() {

  return (
    <>
      <div className=" p-5">
        <div className='mb-5'>
          <h2 className=" fs-1">My Bids</h2>
          {/* <span className=''>Click on job titles to view more details</span> */}
        </div>
        <div className="">
          <BidCard />
          // Cards Go Here
        </div>
      </div>
    </>
  );
}