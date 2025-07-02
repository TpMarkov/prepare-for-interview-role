import React, { useRef, useState, useEffect } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "./AIResponsePreview";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  // Update height dynamically when answer is expanded
  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="bg-white rounded-xl mb-4 overflow-hidden py-4 px-5 shadow-md border border-gray-200 group transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between cursor-pointer">
        <div className="flex items-start gap-3.5">
          <span className="text-sm font-semibold text-gray-400">Q</span>
          <h3
            className="text-sm md:text-base font-medium text-gray-800 mr-0 md:mr-20 transition-colors duration-200"
            onClick={toggleExpand}
          >
            {question}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end ml-4 relative space-x-2">
          <div
            className={`flex gap-2 transition-opacity duration-200 ${
              isExpanded ? "md:flex" : "md:hidden group-hover:flex"
            }`}
          >
            <button
              className="flex items-center gap-1 text-xs text-indigo-800 font-medium bg-indigo-50 px-3 py-1 rounded border border-indigo-50 hover:border-indigo-200"
              onClick={onTogglePin}
              title={isPinned ? "Unpin" : "Pin"}
            >
              {isPinned ? <LuPinOff size={14} /> : <LuPin size={14} />}
              <span className="hidden md:inline">
                {isPinned ? "Unpin" : "Pin"}
              </span>
            </button>

            <button
              className="flex items-center gap-1 text-xs text-cyan-800 font-medium bg-cyan-50 px-3 py-1 rounded border border-cyan-50 hover:border-cyan-200 hover:cursor-pointer"
              onClick={() => {
                setIsExpanded(true);
                onLearnMore?.();
              }}
              title="Learn more"
            >
              <LuSparkles size={14} />
              <span className="hidden md:inline">Learn More</span>
            </button>
          </div>

          <button
            className="transition-transform"
            onClick={toggleExpand}
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <LuChevronDown
              size={20}
              className={`transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Answer */}
      <div
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div ref={contentRef} className="mt-3 bg-gray-50 rounded-lg px-3 py-2">
          <AIResponsePreview content={answer} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
