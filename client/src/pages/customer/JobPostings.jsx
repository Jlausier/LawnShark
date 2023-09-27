import { useQuery } from "@apollo/client";

import { getUserRoleId } from "../../utils/auth";
import { QUERY_MY_POSTINGS } from "../../utils/queries";

import CustomerJobPostingCard from "../../components/customer-view/JobPostingCard";
import NavButton from "../../components/common/NavButton";
import Skeleton from "react-loading-skeleton";

export default function JobPostings() {

  const customerId = getUserRoleId();

  const { data, loading } = useQuery(QUERY_MY_POSTINGS, {
    variables: {
      customerId: customerId,
    },
  });

  return (
    <div>
      <div className="py-4">
        <div className=" mb-5 row">
          <div className="col-12 col-lg-10">
            <h2 className="header">My Job Postings</h2>
          </div>
          <div className=" col-12 col-lg-2 text-end">
            <NavButton title={"New Job Posting"} path={"/CreateJobPosting"} />
          </div>
        </div>
        <div className="">
          {data && data.myPostings && data.myPostings.length > 0 ? (
            <div>
              {data.myPostings.map((jobs) => (
                <CustomerJobPostingCard {...jobs} key={jobs._id} />
              ))}
            </div>
          ) : (
            <div className="body-font fs-4">
              You have not made any new Job Postings.
            </div>
          )}
        {loading && [1,2,3,4].map((n) => <Skeleton className={"card-body mb-3"} height={160} key={n} />)}
        </div>
      </div>
    </div>
  );
}
