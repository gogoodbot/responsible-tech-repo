import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="modal-container">
        <div className="close-select">     
        </div>
        <div className="close-button-div">
            <button className="close-button" onClick={onClose}>
              x
            </button>
          </div>
        <div className="modal-head">
          <div className="modal-head-title-wrapper">
            <div className="modal-head-logo">
              {data?.logo && <img src="" alt="logo"></img>}
            </div>
            <div className="modal-head-title-div">
              {data?.name && (
                <div className="modal-head-title">{data.name}</div>
              )}
            </div>
            <div className="modal-head-badge">
              {data?.type && (
                <div className="modal-head-badge-text">{data.type}</div>
              )}
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-heading">About</div>
          <div className="about-desc">{data?.summary && data.summary}</div>
          <div className="about-email">{data?.email && data.email}</div>
          <div className="about-social">
            <div className="about-social-linkedIn">
              <div className="linkedin-Icon-wrapper">
                <div className="linkedin-Icon-wrapper oval">
              <div className="linkedin-shape oval">.</div>
              <div className="linkedin-shape shape2">|</div>
                 <div className="linkedin-shape shape1">n</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
