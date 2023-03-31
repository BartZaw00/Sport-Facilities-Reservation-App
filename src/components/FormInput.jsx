import React from "react";

const FormInput = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  type,
  isEditMode,
  propRef,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <label htmlFor={id} className="text-my-gray">
        {label}
      </label>
      {isEditMode ? (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          ref={propRef}
        />
      ) : (
        <div className="px-4 py-2 border border-gray-300 rounded-md">
          {type === "password" ? "*********" : value}
        </div>
      )}
    </div>
  );
};

export default FormInput;
