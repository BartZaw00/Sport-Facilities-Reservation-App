import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SportFacilityBox } from "../components";

//import { sportFacilitiesData } from "../utils/data.js";

const SportFacilities = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [sportFacilities, setSportFacilities] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_HOME_URL}/getBySport?sportID=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSportFacilities(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [selectedCategory]);

  const handleSportFacilityClick = (id) => {
    navigate(`/sport-facility/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid grid-cols-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-6 gap-y-8">
      {sportFacilities.map((sportFacility) => (
        <SportFacilityBox
          key={sportFacility.sportFacilityId}
          sportFacility={sportFacility}
          onClick={() => handleSportFacilityClick(sportFacility.sportFacilityId)}
        />
      ))}
    </div>
  );
};

export default SportFacilities;
