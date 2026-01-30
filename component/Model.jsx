import React from "react";

function Model({  onClose, message }) {
//   if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* <h3>{title }</h3> */}
        <p>{message }</p>

        <div className="modal-actions">
          <button className="btn-close" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
