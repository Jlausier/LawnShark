import JobPostingCard from '../../components/JobPostingCard';

export default function FindWork() {

    return (
        <div className=" p-5">
          <div className="border p-4 rounded">
            <div className='mb-5'>
              <h2 className=" fs-1">Find Work</h2>
              <span className=''>Click on job titles to view more details</span>
            </div>
            <div className=" mb-3">
              <span className='pe-2'>Filter Results:</span>
            
              <a className='pe-2 '>Lawn Work</a>
              <a className='pe-2'>Tree Trimming</a>
              <a className='pe-2'>Power Washing</a>
              <a className='pe-2'>Fertilizing</a>
            </div>
            <div className="">
              <JobPostingCard />
              // Cards Go Here
            </div>
          </div>
        </div>
    );
}