import { useState } from "react";

export default function Modal() {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

  return (
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
                <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={closeModal}>
                    Save changes
                </button>
                </div>
            </div>
        </div>
    </div>
  );
}
