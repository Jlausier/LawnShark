import JobPosting from  '../user/JobPosting';

export default function MyJobs() {

  return (
    <>
      <div className=" p-5">
        <div className='mb-5'>
          <h2 className=" fs-1">My Jobs</h2>
          {/* <span className=''>Click on job titles to view more details</span> */}
        </div>
        <div className="">
          <JobPosting />
          // Cards Go Here
        </div>
      </div>
    </>
  );
}