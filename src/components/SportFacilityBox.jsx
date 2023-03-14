import React from "react";

const SportFacilityBox = ({ sportFacility }) => {
  return (
    <div className="flex flex-col gap-1">
      <img className="rounded-3xl" src={sportFacility.img} alt="sport facility"/>
      <span>{`${sportFacility.address}, ${sportFacility.city}`}</span>
      <span>{sportFacility.type}</span>
    </div>
  );
};

export default SportFacilityBox;
