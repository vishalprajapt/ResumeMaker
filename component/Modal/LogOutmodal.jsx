import React from "react";
import { Modal } from "react-bootstrap";

function LogOutmodal({ show, handleClose }) {
  const handleLogout = () => {
    localStorage.removeItem("MyPofile");
    window.location.reload();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="sm"
      dialogClassName="logout-modal"
      contentClassName="logout-modal-content"
    >
      <div className="logout-wrapper">
        <h3 className="logout-title">Are you sure you want to logout?</h3>

        <div className="logout-actions">
          <button className="btn-cancel" onClick={handleClose}>
            Cancel
          </button>

          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LogOutmodal;
