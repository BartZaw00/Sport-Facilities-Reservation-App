import React from 'react'

const FormInfoNote = ({ id, icon, text, isActive }) => {
    return (
      <p
        id={id}
        className={
          isActive
            ? "relative bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded mt-2 transition-opacity"
            : "hidden"
        }
      >
        {icon && <span className="absolute right-2 top-2">{icon}</span>}
        <span>{text}</span>
      </p>
    );
  };

export default FormInfoNote