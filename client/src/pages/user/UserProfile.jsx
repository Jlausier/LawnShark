import JobPostingCard from "../../components/JobPostingCard";

export default function UserProfile() {

  const user = {
    _id: "",
    email: "#test@email.com",
    password: "#password",
    _customer: {
      _id: "",
      name: "#customerName",
      location: "#location",
      postings: [
        {
          _id: "",
          service: {
            _id: "",
            name: "#serviceName",
          },
          askingPrice: 0,
          estimatePrice: 0,
          bids: [
            {
              _id: "",
              amount: 0,
              company: {
                _id: "",
                name: "#companyName",
              },
            }
          ],
        },
      ],
    },
  };

    return (
      <div className='p-5'>
        <div className="border p-4 rounded">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <span>User Profile</span>
              <h2 className=' fs-1'>{ user._customer.name }</h2>
              <span>{ user._customer.location }</span>
            </div>
            {/* Make button a component */}
            {/* Add a modal */}
            <a class='btn green text-light' href='#' role='button'>Edit Profile</a>
          </div>
          <hr/>
          <div>
            <h3 className="fs-5">User Info</h3>
            <p>email: { user.email }</p>
            <p>password: { user.password }</p>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <h3 className="fs-5">Job Posting History</h3>
            <span> Total Job Postings: { user._customer.postings.length } </span>
          </div>
          <div>
            <JobPostingCard />
          </div>
        </div>
      </div>
    );
}