import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../components/sharedComponents";
import SportFacilityBox from "./sportFacilitiesContent/SportFacilityBox";

const SportFacilities = ({ sportFacilities, isLoading }) => {
  const navigate = useNavigate();
  
  const handleSportFacilityClick = (id) => {
    navigate(`/sport-facility/${id}`);
  };

  return (
    <div className="mt-6 px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid grid-cols-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-6 gap-y-8">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        sportFacilities.map((sportFacility) => (
          <SportFacilityBox
            key={sportFacility.sportFacilityId}
            sportFacility={sportFacility}
            onClick={() =>
              handleSportFacilityClick(sportFacility.sportFacilityId)
            }
          />
        ))
      )}
    </div>
  );
};

export default SportFacilities;
