import React from "react";

const FormSelectReservation = ({
  label,
  options,
  value,
  onChange,
  isMediumScreen,
  isSmallScreen,
}) => {
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
        className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none ring-1 hover:ring-my-primary focus:ring-my-primary ${
          isMediumScreen ? "text-xs  h-10" : "text-lg"
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
