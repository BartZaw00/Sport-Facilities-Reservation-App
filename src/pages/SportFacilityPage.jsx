import React, { useState } from "react";
import Navbar from "../containers/navbar/Navbar";
import SportFacility from "../containers/sportFacility/SportFacility";
import { useParams } from "react-router-dom";

const SportFacilityPage = () => {
  const { id } = useParams();

  // State to determine if data is being fetched
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      id="sport-facility-page"
      className="bg-my-primary-bg max-w-[2000px] mx-auto"
    >
      <Navbar isHomePage={false} />
      <SportFacility
        id={id}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {!isLoading && (
        <footer className="fixed bottom-0 bg-gray-800 py-4 text-center text-white w-full backdrop-blur z-50 md:hidden">
          <p>&copy; {new Date().getFullYear()} Bartosz Zawadka</p>
        </footer>
      )}
    </div>
  );
};

export default SportFacilityPage;
