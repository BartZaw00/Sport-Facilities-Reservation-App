import React from "react";

const FormSelect = ({ label, id, options, className }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id} className="text-my-gray">
        {label}
      </label>
      <select id={id} className={className}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
