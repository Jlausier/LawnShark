import JobPostingCard from  '../../components/JobPostingCard';

export default function MyJobs() {

  return (
      <div className=" p-5">
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className=" fs-1">My Jobs</h2>
          </div>
          <div className="">
            <JobPostingCard />
            // Cards Go Here
          </div>
        </div>
      </div>
  );
}