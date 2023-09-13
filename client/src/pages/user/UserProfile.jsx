import { useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_MY_POSTINGS } from "../../utils/queries";
import JobPostingCard from "../../components/JobPostingCard";
import Button from "../../components/Button";
import UpdateForm from "../../components/modal/UpdateForm";

export default function UserProfile() {

    const { data } = useQuery(QUERY_MY_POSTINGS, {
    variables: {
      customerId: "",
    },
  });
  console.log(data);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
      
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
      <div>
        <div className='p-5'>
          <div className="border p-4 rounded">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <span>User Profile</span>
                <h2 className=' fs-1'>{ user._customer.name }</h2>
                <span>{ user._customer.location }</span>
              </div>
              {/* Add a modal */}
              <Button title={"Edit Profile"} onClick={openModal}/>
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
            {data && data.myPostings && data.myPostings.length > 0 ? (
              <div>
                {data.myPostings.map((jobs) => (
                  <JobPostingCard {...jobs} key={jobs._id} />
                ))}
              </div>
            ) : (
              <div>You have not made any Job Postings.</div>
            )}
            </div>
          </div>
        </div>
        {showModal && (
          // Turn into a Component
          <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Profile</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Content for your modal */}
                    <div className="modal-header">User Info</div>
                    <div className="p-3">
                      <UpdateForm title={"Name"}/>
                      <UpdateForm title={"Email"}/>
                      <UpdateForm title={"Password"}/>
                    </div>
                    <div className="modal-header">Location</div>
                    <div className="p-3">
                      <UpdateForm title={"Address"}/>
                      <UpdateForm title={"City"}/>
                      <UpdateForm title={"State"}/>
                      <UpdateForm title={"Zip"}/>
                    </div>            
                  </div>

                </div>
              </div>
          </div>
        )}
      </div>
      
    );
}