import React, { createContext, useEffect, useState } from "react";
import Navbar from "../containers/navbar/Navbar";
import Categories from "../containers/categories/Categories";
import Map from "../containers/map/Map";
import SportFacilities from "../containers/sportFacilities/SportFacilities";
import MapOpenButton from "../containers/map/mapContent/MapOpenButton";

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMapButtonClick = () => {
    setShowMap(!showMap);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div id="home-page" className="bg-my-primary-bg">
      <Navbar
        className="h-20 bg-my-primary-bg fixed top-0 w-full grid px-20  2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40"
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showMap ? (
        <Map />
      ) : (
        <SportFacilities
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      )}
      <MapOpenButton onClick={handleMapButtonClick} showMap={showMap} />
    </div>
  );
};

export default HomePage;
