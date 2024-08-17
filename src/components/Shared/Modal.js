import React from "react";

const Modal = ({ children, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-md relative">
        <button
          className="absolute top-0 right-0 mt-2 mr-3 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
