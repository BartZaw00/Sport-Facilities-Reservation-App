import React, { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const SportFacilityBox = ({ sportFacility }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative flex flex-col gap-1 cursor-pointer">
      <div className="relative rounded-xl aspect-square overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-my-black-rgba"></div>
        <img
          className="h-full w-full object-cover"
          src={sportFacility.img}
          alt="sport facility"
        />
      </div>

      <span className="font-semibold">{`${sportFacility.address}, ${sportFacility.city}`}</span>
      <span>{sportFacility.type}</span>
      <div onClick={handleClick}>
        {isClicked ? (
          <BsSuitHeartFill
            size={30}
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
