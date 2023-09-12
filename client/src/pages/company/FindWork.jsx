import JobPostingCard from '../../components/JobPostingCard';
import {QUERY_POSTINGS} from "../../utils/queries"
import { useQuery } from "@apollo/client";

  

export default function FindWork() {
  const {data} = useQuery(QUERY_POSTINGS)
  const postings = data
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
              <JobPostingCard postings = {postings} />
            </div>
          </div>
        </div>
    );
}