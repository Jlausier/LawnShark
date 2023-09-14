// import { useQuery } from "@apollo/client";

// import { QUERY_MY_POSTINGS } from "../../utils/queries";
import JobPostingCard from  '../../components/JobPostingCard';

export default function MyJobs() {
  //   const { data } = useQuery(QUERY_MY_POSTINGS, {
  //   variables: {
  //     customerId: "",
  //   },
  // });
  // console.log(data);

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