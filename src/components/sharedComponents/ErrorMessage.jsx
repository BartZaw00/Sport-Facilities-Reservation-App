import React, { useRef } from "react";

const ErrorMessage = ({ errMsg, ariaLive }) => {
  const errRef = useRef(null);
  return (
    <p
      ref={errRef}
      className={
        errMsg &&
        "text-red-500 text-sm mt-1 border-2 border-red-500 rounded-md px-3 py-2"
      }
      aria-live={ariaLive || "polite"}
    >
      {errMsg}
    </p>
  );
};

export default ErrorMessage;
