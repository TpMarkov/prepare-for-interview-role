import React from "react";

function Modal({ children, isOpen, onClose, title, hideHeader }) {
  return (
    <div className="flex inset-0 z-50 flex justify-center items-center w-full h-full">
      {/* Modal contetnt */}
      <div
        className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden`}
      >
        {/* Modal Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-y border-b border-gray-200">
            <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
          </div>
        )}

        <button type="button" className="text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex jsutify-center items-center absolute top-3.5 righ-3.5 cursor-pointer" onClick={onClose}>
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
              d="M1 1l6 6m0 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        {/* Modal Body (Scrollable) */}

        <div className="flex-1 overflow-y-auto cursor-scrollbar">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
