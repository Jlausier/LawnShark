import JobPostingCard from  '../../components/JobPostingCard';

export default function MyBids() {

  return (
    <>
      <div className='border p-5'>
        <div className='mb-5 d-flex justify-content-between align-items-start'>
          <h2 className='border fs-1'>My Job Postings</h2>
          {/* <span className=''>Click on job titles to view more details</span> */}
          <a class='btn btn-dark' href='#' role='button'>Add New</a>
        </div>
        <div className='border'>
          <JobPostingCard />
          Cards
        </div>
      </div>
    </>
  );
}