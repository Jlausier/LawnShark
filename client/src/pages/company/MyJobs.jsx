import { useQuery } from "@apollo/client";
import {getUserRoleId} from "./auth";
import { QUERY_MY_POSTINGS } from "../../utils/queries";
import JobPostingCard from  '../../components/JobPostingCard';

export default function MyJobs() {
    const companyId = getUserRoleId();
    const { data } = useQuery(QUERY_MY_ACCEPTED_BIDS, {
    variables: {
      companyId: companyId,
    },
  });
  console.log(data);

  return (
        <div className="border p-4 rounded">
          <div className='mb-5'>
            <h2 className="header">My Jobs</h2>
          </div>
          <div className="">
          {/* {data && data.myPostings && data.myPostings.length > 0 ? (
            <div>
              {data.myPostings.map((jobs) => (
                <JobPostingCard {...jobs} key={jobs._id} />
              ))}
            </div>
          ) : (
            <div>No new bids have been accepted.</div>
          )} */}
          </div>
        </div>
  );
}
