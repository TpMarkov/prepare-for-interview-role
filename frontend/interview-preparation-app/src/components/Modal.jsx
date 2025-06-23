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

       <button
       type="button"
       className=""
       onClick={onClose}
       >
        <svg   
        className=""
        aria-hidden="true"
        xmlns="htttp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        >
          <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1l6"

  );
}

export default Modal;
