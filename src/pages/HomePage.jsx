import React, { useEffect, useState } from "react";
import Navbar from "../containers/navbar/Navbar";
import Categories from "../containers/categories/Categories";
import Map from "../containers/map/Map";
import SportFacilities from "../containers/sportFacilities/SportFacilities";
import MapOpenButton from "../containers/map/mapContent/MapOpenButton";

import { fetchSportFacilitiesByCategory, fetchSportFacilitiesBySearchQuery } from "../services/SportFacilityService";

const HomePage = ({ sportFacilities, setSportFacilities, filters, isLoading, setIsLoading }) => {
  // Defining state variables
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);

  // Extracting filters from the props and destructuring them
  const { filteredSurface, filteredDistance, filteredProvince } = filters;
  const [surface, setSurface] = filteredSurface;
  const [distance, setDistance] = filteredDistance;
  const [province, setProvince] = filteredProvince;

  // Executing the getLocation function on initial render
  useEffect(() => {
    getLocation();
  }, []);

  // Fetching sport facilities whenever any of the state variables used in the dependency array changes
  useEffect(() => {
    fetchSportFacilities();
  }, [selectedCategory, searchQuery, location, surface, distance, province]);

  // Function to fetch sport facilities based on the selected category, search query and filters
  const fetchSportFacilities = async () => {
    let data;

    if (searchQuery === "") {
      // Fetching sport facilities by category if there is no search query
      data = await fetchSportFacilitiesByCategory(selectedCategory);
    } else {
      // Fetching sport facilities by search query and category if there is a search query
      data = await fetchSportFacilitiesBySearchQuery(searchQuery, selectedCategory);
    }

    // Adding distance to the fetched sport facilities based on the user's current location
    const facilitiesWithDistance = addDistanceToFacilities(data);
    
    // Filtering the fetched sport facilities based on the filters applied by the user
    let filteredFacilities = facilitiesWithDistance.filter((facility) => {
      if (surface && surface !== "" && facility.type.surface !== surface) {
        return false;
      }
      if (distance && distance !== 0 && facility.distance > distance) {
        return false;
      }
      if (province && province !== "" && facility.province !== province) {
        return false;
      }
      return true;
    });

    // Setting the filtered sport facilities and isLoading to false
    setSportFacilities(filteredFacilities);
    setIsLoading(false);
  };

  // Function to add distance to the fetched sport facilities based on the user's current location
  const addDistanceToFacilities = (facilities) => {
    if (!location) return facilities; // return the original facilities if location is not available yet

    const facilitiesWithDistance = facilities.map((facility) => {
      const userLocation = L.latLng(location.latitude, location.longitude);
      const sportFacilityLocation = L.latLng(
        facility.latitude,
        facility.longitude
      );
      const distanceInMeters = userLocation.distanceTo(sportFacilityLocation);
      const distanceInKilometers = distanceInMeters / 1000;
      return { ...facility, distance: distanceInKilometers.toFixed(2) };
    });
    return facilitiesWithDistance;
  };

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

  return (
    <div id="home-page" className="bg-my-primary-bg max-w-[2000px] mx-auto">
      <Navbar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
        isHomePage={true}
      />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showMap ? (
        <section style={{ height: "calc(100vh - 163px )" }}>
          <Map sportFacilities={sportFacilities} location={location} />
        </section>
      ) : (
        <SportFacilities
          sportFacilities={sportFacilities}
          setSportFacilities={setSportFacilities}
          isLoading={isLoading}
          location={location}
        />
      )}
      <MapOpenButton handleMapButtonClick={handleMapButtonClick} showMap={showMap} />
    </div>
  );
};

export default HomePage;
