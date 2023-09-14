import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COMPANY } from "../../utils/queries";

import ReviewCard from "../../components/company/ReviewCard";
import Button from "../../components/Button";
import { createLocationString } from "../../utils/dataValidation";

export default function CompanyProfile() {
  const { companyId } = useParams();
  const { data } = useQuery(QUERY_COMPANY, {
    variables: { companyId },
  });

  const openModal = () => {
    alert("Open Modal");
  };

  return data && data.company ? (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <span>Company Profile</span>
            {data.company.name && (
              <h2 className="header">{data.company.name}</h2>
            )}
            {data.company.location && (
              <span>{createLocationString(data.company.location)}</span>
            )}
          </div>
          <div className="justify-content-end align-items-start">
            {/* Make into a Link */}
            <a href="/Messages" className="mx-2">
              Message
            </a>
            {/* Add a modal */}
            <Button title={"Edit Profile"} onClick={openModal} />
          </div>
        </div>
        <div>
          <p>{data.company.description}</p>
        </div>
        <hr />
        <div>
          <h3 className="fs-5">Company Info</h3>
          <p>email: {data.company.email}</p>
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
    </div>
  ) : (
    <div>Loading...</div>
  );
}
