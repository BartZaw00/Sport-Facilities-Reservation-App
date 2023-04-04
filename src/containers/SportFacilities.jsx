import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSpinner, SportFacilityBox } from "../components";

const SportFacilities = ({ selectedCategory, searchQuery }) => {
  const navigate = useNavigate();
  const [sportFacilities, setSportFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSportFacilitiesByCategory();
  }, [selectedCategory]);

  useEffect(() => {
    if (searchQuery === "") {
      fetchSportFacilitiesByCategory();
      return;
    }
    fetchSportFacilitiesBySearchQuery(searchQuery);
  }, [searchQuery]);

  const fetchSportFacilitiesByCategory = () => {
    fetch(
      `${import.meta.env.VITE_HOME_URL}/getBySport?sportID=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSportFacilities(data);
        setIsLoading(false);
      })
      .catch(() => console.log("Wystąpił błąd. Spróbuj ponownie."));
  };

  const fetchSportFacilitiesBySearchQuery = (query) => {
    fetch(
      `${import.meta.env.VITE_HOME_URL}/getBySearchQuery?searchQuery=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSportFacilities(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const handleSportFacilityClick = (id) => {
    navigate(`/sport-facility/${id}`);
  };

  return (
    <div className="px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid grid-cols-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-6 gap-y-8">
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
