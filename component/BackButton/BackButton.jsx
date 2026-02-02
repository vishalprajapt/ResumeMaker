import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton({handleBack}) {
  return (
    <div className="back-btn-wrapper">
      <button className="back-btn"
      onClick={handleBack}
      >
        <IoArrowBackOutline />
        <span>Back</span>
      </button>
    </div>
  );
}

export default BackButton;
