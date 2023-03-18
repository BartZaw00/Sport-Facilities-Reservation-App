import React from "react";
import { useNavigate } from "react-router-dom";

import { SportFacilityBox } from "../components";

import { sportFacilitiesData } from "../utils/data.js";

const SportFacilities = () => {
  const navigate = useNavigate();

  const handleSportFacilityClick = (id) => {
    navigate(`/sport-facility`);
  };

  return (
    <div className="px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid grid-cols-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-6 gap-y-8">
      {sportFacilitiesData.map((item) =>
        item.facilities.map((facility) => (
          <SportFacilityBox
            key={facility.id}
            sportFacility={facility}
            onClick={() => handleSportFacilityClick(facility.id)}
          />
        ))
      )}
    </div>
  );
};

export default SportFacilities;
