import React, { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const SportFacilityBox = ({ sportFacility, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="relative flex flex-col gap-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-xl aspect-[643/611] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-my-sport-facility-overlay"></div>
        <img
          className="h-full w-full object-cover"
          src={sportFacility.photos[0].photoUrl}
          alt="sport facility"
        />
      </div>
      <div className="flex flex-col gap-px">
        <div className="flex justify-between">
          <span className="font-semibold">{`${sportFacility.address}, ${sportFacility.city}`}</span>
          <span>{(Math.random() * 4.9 + 0.1).toFixed(1)} km</span>
        </div>
        <span className="font-light">{sportFacility.type.name}</span>
      </div>
      <div onClick={handleClick}>
        {isClicked ? (
          <BsSuitHeartFill
            size={30}
            color="red"
            className="absolute top-4 right-4 hover:scale-90"
          />
        ) : (
          <BsSuitHeart
            size={30}
            className="absolute top-4 right-4 hover:scale-90"
          />
        )}
      </div>
    </div>
  );
};

export default SportFacilityBox;
