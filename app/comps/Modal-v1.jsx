// components/Modal.js
import React from 'react';
import { createPortal } from 'react-dom';

const StyledModal = ({ children, onClose }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onClose} // Close modal on clicking outside content
    >
      <div
        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative min-w-[70vw] max-h-[80vh] overflow-y-auto w-full max-w-lg'
        onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside content
      >
        {children}
      </div>
    </div>
  );
};

const CloseButton = ({ onClose }) => {
  return (
    <button
      className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-3xl p-3'
      onClick={onClose}
    >
      &times;
    </button>
  );
};

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  //  using portal to ensure reusability of the modal and avoiding potential parent overflow hidden elsewhere
  return createPortal(
    <StyledModal onClose={onClose}>
      <CloseButton onClose={onClose} />
      {children}
    </StyledModal>,
    document.body
  );
}
