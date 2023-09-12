import ReviewCard from "../../components/company/ReviewCard";
import Button from "../../components/Button";

export default function CompanyProfile() {

  const openModal = () => {
    alert("Open Modal");
  }

  const company = {
    _id: "",
    email: "#test@email.com",
    password: "#password",
    _company: {
      _id: "",
      name: "#companyName",
      description: "#description",
      services: [
        {
          _id: "",
          name: "#serviceName",
        }
      ],
      reviews: [
        {
          reviewText: "#reviewText",
          createdAt: "#createdAt",
          rating: 0,
          customer: {
            _id: "",
            name: "#customerName"
          }
        }
      ]
    },
  };

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
              {/* Add a modal */}
              <Button title={"Edit Profile"} onClick={openModal}/>
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