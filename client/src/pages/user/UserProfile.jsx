/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_CUSTOMER_USER } from "../../utils/queries";
import { getUserId } from "../../utils/auth";
import { createLocationString } from "../../utils/dataValidation";

import Button from "../../components/Button";
import UserPostings from "../../components/UserPostings";
import UpdateForm from "../../components/modal/UpdateForm";

export default function UserProfile() {
  const userId = getUserId();
  console.log(userId);

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    _customer: {
      name: "",
      location: "",
      postings: [],
    },
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    _customer: {
      name: "",
      location: "",
    },
  });

  const { data } = useQuery(QUERY_CUSTOMER_USER, {
    variables: { userId },
  });

  useEffect(() => {
    if (data && data.customerUser) {
      console.log(data.customerUser);

      setUserData((prevUserData) => ({
        ...prevUserData,
        ...data.customerUser,
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        ...data.customerUser,
      }));
    }
  }, [data]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Update user data based on the form input
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="p-5">
        <div className="border p-4 rounded">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h2 className="header">{userData._customer.name}</h2>
              <span>{createLocationString(userData._customer.location)}</span>
            </div>
            <Button title={"Edit Profile"} onClick={openModal} />
          </div>
          <hr />
          <div>
            <h3 className="fs-5">User Info</h3>
            <p>email: {userData.email}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h3 className="fs-5">Job Posting History</h3>
            <span>
              {" "}
              Total Job Postings: {userData._customer.postings.length}{" "}
            </span>
          </div>
          <div>
            {userData._customer.postings.length > 0 && (
              <UserPostings postings={userData._customer.postings} />
            )}
          </div>
        </div>
      </div>
      {showModal && (
        // Turn into a Component
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
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
                  <UpdateForm
                    title={"Name"}
                    value={formData._customer.name}
                    onUpdate={handleUpdate}
                  />
                  <UpdateForm
                    title={"Email"}
                    value={formData.email}
                    onUpdate={handleUpdate}
                  />
                  <UpdateForm
                    title={"Password"}
                    value={formData.password}
                    onUpdate={handleUpdate}
                  />
                </div>
                <div className="modal-header">Location</div>
                <div className="p-3">
                  <UpdateForm
                    title={"Address"}
                    value={formData.location}
                    onUpdate={handleUpdate}
                  />
                  <UpdateForm title={"City"} />
                  <UpdateForm title={"State"} />
                  <UpdateForm title={"Zip"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
