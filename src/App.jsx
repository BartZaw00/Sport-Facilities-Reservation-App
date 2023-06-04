import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./containers/modal/Modal";

import { HomePage, SportFacilityPage, ErrorPage } from "./pages/index";

export const ModalContext = createContext();

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImages, setSelectedImages] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sportFacilities, setSportFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [surface, setSurface] = useState("");
  const [distance, setDistance] = useState(15);
  const [city, setCity] = useState("");

  const filters = {
    filteredSurface: [surface, setSurface],
    filteredDistance: [distance, setDistance],
    filteredCity: [city, setCity],
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        selectedOption,
        setSelectedOption,
        setSelectedImages,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                sportFacilities={sportFacilities}
                setSportFacilities={setSportFacilities}
                filters={filters}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="/sport-facility/:id" element={<SportFacilityPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {isModalOpen && (
          <Modal
            option={selectedOption}
            images={selectedImages}
            filters={filters}
            setIsLoading={setIsLoading}
          />
        )}
      </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;
