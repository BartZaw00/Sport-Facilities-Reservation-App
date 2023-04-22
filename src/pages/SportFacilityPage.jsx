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
      <Navbar isHomePage={false}/>
      <SportFacility id={id} />
    </div>
  );
};

export default SportFacilityPage;
