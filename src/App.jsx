import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "./containers/modal/Modal";

import { HomePage, SportFacilityPage, ErrorPage } from "./pages/index";

export const ModalContext = createContext();

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImages, setSelectedImages] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Route exact path="/" element={<HomePage />} />
          <Route path="/sport-facility/:id" element={<SportFacilityPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {isModalOpen && (
          <Modal option={selectedOption} images={selectedImages} />
        )}
      </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;
