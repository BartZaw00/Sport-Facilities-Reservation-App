import React from "react";

const FormButton = ({ children, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FormButton;
