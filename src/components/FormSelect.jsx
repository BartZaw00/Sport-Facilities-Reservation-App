import React from "react";

const FormSelect = ({ label, id, options, className, labelClassName, divClassName }) => {
  return (
    <div className={divClassName}>
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
