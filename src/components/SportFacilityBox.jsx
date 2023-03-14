import React from "react";

const SportFacilityBox = ({ sportFacility }) => {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="rounded-xl aspect-square  overflow-hidden">
        <img className="h-full w-full object-cover" src={sportFacility.img} alt="sport facility" />
      </div>

      <span className="font-semibold">{`${sportFacility.address}, ${sportFacility.city}`}</span>
      <span>{sportFacility.type}</span>
    </div>
  );
};

export default SportFacilityBox;
