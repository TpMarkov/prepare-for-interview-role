import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SumaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-white border border-gray-300/40 rounded-xl p-2 sm:p-3 overflow-hidden cursor-pointer hover:shadow-xl shadow-gray-100 relative group transition-shadow"
      onClick={onSelect}
    >
      <div
        className="rounded-lg p-4 sm:p-5 relative"
        style={{ background: colors.bgcolor }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-semibold text-black">
              {getInitials(role)}
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-semibold text-black">{role}</h2>
                <p className="text-xs text-gray-800">{topicsToFocus}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="hidden group-hover:flex items-center gap-2 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded border border-rose-100 hover:border-rose-200 absolute top-2 right-2"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 />
        </button>
      </div>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className="text-[10px] font-medium text-black px-3 py-1 border border-gray-900 rounded-full">
            Experience: {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="text-[10px] font-medium text-black px-3 py-1 border border-gray-900 rounded-full">
            {questions} Q&A
          </div>

          <div className="text-[10px] text-black font-medium px-3 py-1 border border-gray-900 rounded-full">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default SumaryCard;
