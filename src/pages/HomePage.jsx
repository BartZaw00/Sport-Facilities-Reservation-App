import React, { createContext, useEffect, useState } from "react";
import Navbar from "../containers/navbar/Navbar";
import Categories from "../containers/categories/Categories";
import Map from "../containers/map/Map";
import SportFacilities from "../containers/sportFacilities/SportFacilities";
import MapOpenButton from "../containers/map/mapContent/MapOpenButton";
import { useLoadScript } from "@react-google-maps/api";
import { LoadingSpinner } from "../components/sharedComponents";

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sportFacilities, setSportFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

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

  const handleMapButtonClick = () => {
    setShowMap(!showMap);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchSportFacilitiesByCategory = async () => {
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

  const fetchSportFacilitiesBySearchQuery = async (query) => {
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

  return (
    <div id="home-page" className="bg-my-primary-bg max-w-[2000px] mx-auto">
      <Navbar
        className="max-w-[2000px] h-20 bg-my-primary-bg fixed top-0 w-full grid px-20  2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40"
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showMap ? (
        isLoaded ? (
          <section style={{ height: "calc(100vh - 163px )" }}>
            <Map sportFacilities={sportFacilities}/>
          </section>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <SportFacilities
          sportFacilities={sportFacilities}
          isLoading={isLoading}
        />
      )}
      <MapOpenButton onClick={handleMapButtonClick} showMap={showMap} />
    </div>
  );
};

export default HomePage;
