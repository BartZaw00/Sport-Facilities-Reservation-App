import React, { createContext, useState } from "react";

import { MapButton } from "../components";

import { Categories, Navbar, SportFacilities, Modal } from "../containers/index";

export const ModalContext = createContext();

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="home-page" className="bg-my-primary-bg">
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <Navbar />
        <Categories />
        <SportFacilities />
        <MapButton />
        {isModalOpen && <Modal />}
      </ModalContext.Provider>
    </div>
  );
};

export default HomePage;
