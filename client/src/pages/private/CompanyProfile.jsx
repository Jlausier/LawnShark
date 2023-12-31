import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COMPANY } from "../../utils/queries";

import ReviewCard from "../../components/company/ReviewCard";
import Button from "../../components/common/Button";
import { createLocationString } from "../../utils/dataValidation";
import Skeleton from "react-loading-skeleton";

export default function CompanyProfile() {
  const { companyId } = useParams();
  const { data } = useQuery(QUERY_COMPANY, {
    variables: { companyId },
  });

  const openModal = () => {
    alert("Open Modal");
  };
  console.log(data);

  return data && data.company ? (
    <div className="py-4">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <span>Company Profile</span>
          {data.company.name && <h2 className="secondary-header">{data.company.name}</h2>}
          {data.company.location && (
            <span>{createLocationString(data.company.location)}</span>
          )}
        </div>
      </div>
      <div>
        <p>{data.company.description || <Skeleton width={200} height={60} />}</p>
      </div>
      <hr />
      <div>
        <h3 className="fs-5">Company Info</h3>
        {/* <p>email: {data.company.email || <Skeleton width={150} height={20} />}</p> */}
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h3 className="fs-5">Reviews</h3>
        <span> Total Reviews: {data.company.reviews.length} </span>
      </div>
      <div>
        {data.company.reviews &&
          data.company.reviews.map((review) => (
            <ReviewCard {...review} key={review.customer._id} />
          ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
