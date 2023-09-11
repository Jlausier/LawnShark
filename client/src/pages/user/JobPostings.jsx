import JobPostingCard from  '../../components/JobPostingCard';

export default function JobPostings() {

  return (
      <div className=' p-5'>
        <div className='mb-5 d-flex justify-content-between align-items-start'>
          <h2 className=' fs-1'>My Job Postings</h2>
          <a class='btn btn-dark' href='#' role='button'>Add New</a>
        </div>
        <div className=''>
          <JobPostingCard />
          // Cards Go Here
        </div>
      </div>
  );
}