import React from "react";

function Modal({ children, isOpen, onClose, title, hideHeader }) {
  return (
    <div className="">
      {/* Modal contetnt */}
      <div
        className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden`}
      >
        {/* Modal Header */}
        {!hideHeader && (
          <div className="">
            <h3 className="">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
