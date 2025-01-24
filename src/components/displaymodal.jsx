import React, { useState } from "react";
import "./Modal.css";

const DisplayModal = ({ isOpen, onClose, business }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <h3 className="modal-title">{business.navn}</h3>
        <div className="modal-body">{business.beskrivelse}</div> */}
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DisplayModal;
