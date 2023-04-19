import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="min-w-[150px] absolute top-6 -right-4 bg-gray-200 px-2 py-1 rounded-md shadow-sm z-[1050]">
      {text}
    </div>
  );
};

export default Tooltip;
