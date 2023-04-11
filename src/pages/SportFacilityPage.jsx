import React from "react";
import Navbar from "../containers/navbar/Navbar";
import SportFacility from "../containers/sportFacility/SportFacility";
import { useParams } from "react-router-dom";

const SportFacilityPage = () => {
  const { id } = useParams();

  return (
    <div
      id="sport-facility-page"
      className="bg-my-primary-bg max-w-[2000px] mx-auto"
    >
      <Navbar className="max-w-[2000px] h-20 bg-my-primary-bg fixed top-0 w-full grid px-96 2xl:px-60 xl:px-32 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40" />
      <SportFacility id={id} />
    </div>
  );
};

export default SportFacilityPage;
