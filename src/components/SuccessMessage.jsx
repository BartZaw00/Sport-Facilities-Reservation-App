import React from "react";

const SuccessMessage = ({ successMsg }) => {
  return (
    <p
      className={
        successMsg &&
        "text-green-500 text-sm mt-1 border-2 border-green-500 rounded-md px-3 py-2"
      }
    >
      {successMsg}
    </p>
  );
};

export default SuccessMessage;
