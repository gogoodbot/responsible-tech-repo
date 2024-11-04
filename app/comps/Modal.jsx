// components/Modal.js
import React from 'react';

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onClose} // Close modal on clicking outside content
    >
      <div
        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative min-w-[70vw] max-h-[80vh] overflow-y-auto w-full max-w-lg'
        onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside content
      >
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-gray-600'
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
