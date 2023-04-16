import React, { useEffect, useState } from "react";
import Navbar from "../containers/navbar/Navbar";
import Categories from "../containers/categories/Categories";
import Map from "../containers/map/Map";
import SportFacilities from "../containers/sportFacilities/SportFacilities";
import MapOpenButton from "../containers/map/mapContent/MapOpenButton";
import { useLoadScript } from "@react-google-maps/api";
import { LoadingSpinner } from "../components/sharedComponents";

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sportFacilities, setSportFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initializing the Google Maps API using the useLoadScript hook
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Executing the getLocation function on initial render
  useEffect(() => {
    getLocation();
  }, []);

  // Fetching Sport Facilities based on the selected category
  useEffect(() => {
    fetchSportFacilitiesByCategory();
  }, [selectedCategory]);

  // Fetching Sport Facilities based on the search query
  useEffect(() => {
    if (searchQuery === "") {
      fetchSportFacilitiesByCategory();
      return;
    }
    fetchSportFacilitiesBySearchQuery(searchQuery);
  }, [searchQuery]);

  // Defining a function to get the user's current location
  const getLocation = () => {
    if (!navigator.geolocation) {
      // A message to the user when the geolocation API is not supported in the browser
      alert("Twoja przeglądarka nie obsługuje geolokalizacji.");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // Toggling the showMap state variable when the map button is clicked
  const handleMapButtonClick = () => {
    setShowMap(!showMap);
  };

  // Updating the search query state variable when the user types in the search bar
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
      .catch(() => console.error(error));
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
            <Map sportFacilities={sportFacilities} location={location} />
          </section>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <SportFacilities
          sportFacilities={sportFacilities}
          isLoading={isLoading}
          location={location}
        />
      )}
      <MapOpenButton onClick={handleMapButtonClick} showMap={showMap} />
    </div>
  );
};

export default HomePage;
