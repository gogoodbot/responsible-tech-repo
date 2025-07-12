import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="modal-container">
        <div className="modal-head">
          {data?.logo && (
            <div src="" alt="logo">
              <img></img>
            </div>
          )}
          {data?.name && <div className="head-title">{data.name}</div>}
          {data?.type && <div className="head-type"><div className="head-typedesc">{data.type}</div></div>}
        </div>
        <div className="about">
          <div className="about-title">About</div>
          {data?.summary && <div className="about-desc">{data.summary}</div>}
        </div>

        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
