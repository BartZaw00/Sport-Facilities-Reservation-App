import React from "react";

const Image = ({ image, onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-my-sport-facility-hover transition-colors duration-500"></div>
      <img className="h-full w-full object-cover" src={image} alt="" />
    </div>
  );
};

export default Image;
