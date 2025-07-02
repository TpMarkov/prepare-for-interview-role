import React from "react";

const SkeletonLoader = ({ lines = 3, showAvatar = false }) => {
  return (
    <div className="animate-pulse space-y-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
      {showAvatar && (
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-1/3" />
          </div>
        </div>
      )}

      {[...Array(lines)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-300 rounded w-full" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
