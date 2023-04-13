import React from "react";

const FormSelectReservation = ({ label, options, value, onChange, useMediaQuery }) => {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <label
        htmlFor="duration"
        className={`${isMediumScreen ? "text-xs" : "text-lg"} font-medium`}
      >
        {label}
      </label>
      <select
        id="duration"
        className={`border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary ${
          isMediumScreen ? "text-xs" : "text-lg"
        } ${isSmallScreen && "w-12 h-10"}`}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelectReservation;
