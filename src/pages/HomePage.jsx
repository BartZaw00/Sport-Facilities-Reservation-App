import React, { createContext, useEffect, useState } from "react";

import { MapButton } from "../components";

import {
  Categories,
  Navbar,
  SportFacilities,
  Modal,
} from "../containers/index";

export const ModalContext = createContext();

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClick = (option) => {
    console.log("opcja: " + option);
    setSelectedOption(option);
    // setIsModalOpen(true);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div id="home-page" className="bg-my-primary-bg">
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <Navbar handleModalOpenClick={handleModalOpenClick} />
        <Categories handleModalOpenClick={handleModalOpenClick} />
        <SportFacilities />
        <MapButton />
        {isModalOpen && <Modal option={selectedOption} />}
      </ModalContext.Provider>
    </div>
  );
};

export default HomePage;
