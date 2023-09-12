import ReviewCard from "../../components/ReviewCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import{ QUERY_COMPANY } from "../../utils/queries"; 



export default function CompanyProfile() {

  const {companyId} = useParams();
  const{data} = useQuery(QUERY_COMPANY, )

  

    return (
      <div className='p-5'>
        <div className="border p-4 rounded">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <span>Company Profile</span>
              <h2 className=' fs-1'>{ company._company.name }</h2>
              <span>{ company._company.location }</span>
            </div>

            <div className="justify-content-end align-items-start">
              {/* Make into a Link */}
              <a href="/Messages" className="mx-2">Message</a>
              {/* Make button a component */}
              {/* Add a modal */}
              <a class='btn green text-light' href='#' role='button'>Edit Profile</a>
            </div>
          </div>
          <div>
            <p>{ company._company.description }</p>
          </div>
          <hr/>
          <div>
            <h3 className="fs-5">Company Info</h3>
            <p>email: { company.email }</p>
            <p>password: { company.password }</p>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <h3 className="fs-5">Reviews</h3>
            <span> Total Reviews: { company._company.reviews.length } </span>
          </div>
          <div>
            <ReviewCard />
          </div>
        </div>
      </div>
    );
}