import JobPosting from  '../../components/JobPosting';

export default function MyJobs() {

  return (
    <>
      <div className="border p-5">
        <div className='mb-5'>
          <h2 className="border fs-1">My Jobs</h2>
          {/* <span className=''>Click on job titles to view more details</span> */}
        </div>
        <div className="border">
          <JobPosting />
          Cards
        </div>
      </div>
    </>
  );
}