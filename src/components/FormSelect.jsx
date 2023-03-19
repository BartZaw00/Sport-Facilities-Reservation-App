import React from "react";

const FormSelect = ({ label, id, options, className, labelClassName }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id} className={labelClassName}>
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
