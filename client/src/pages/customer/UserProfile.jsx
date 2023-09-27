/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_CUSTOMER_USER } from "../../utils/queries";
import { getUserId } from "../../utils/auth";
import { createLocationString } from "../../utils/dataValidation";

import Button from "../../components/common/Button";
import CustomerPostings from "../../components/customer-view/Postings";
import UpdateForm from "../../components/modal/UpdateForm";
import Skeleton from "react-loading-skeleton";

export default function UserProfile() {
  const userId = getUserId();
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

  const { data, loading } = useQuery(QUERY_CUSTOMER_USER, {
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
      <div className="border p-4 rounded">
        <div className="row">
          <div className="col-12 col-lg-10">
            <span>It&apos;s good to see you,</span>
            <h2 className="header">{userData._customer.name || <Skeleton />}</h2>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="fs-5 mb-4 body-font">User Info</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <Button title={"Edit Profile"} onClick={openModal} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-1">
            <span>email:</span>
          </div>
          <div className="col">{userData.email || <Skeleton width={150} height={20} />}</div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-1">
            <span>location:</span>
          </div>
          <div className="col">
            {createLocationString(userData._customer.location) || <Skeleton width={150} height={20} />}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="fs-5 body-font">Job Posting History</h3>
            <span>
              {" "}
              Total Job Postings: {userData._customer.postings.length}{" "}
            </span>
          </div>
          <div className="col">
            {userData._customer.postings.length > 0 && (
              <CustomerPostings postings={userData._customer.postings} />
            )}
          {loading && [1,2,3].map((n) => <Skeleton className={"card-body mb-3"} height={160} key={n} />)}
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
