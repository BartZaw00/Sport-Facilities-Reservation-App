import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "./containers";

import { HomePage, SportFacilityPage, ErrorPage } from "./pages/index";

export const ModalContext = createContext();

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, selectedOption, setSelectedOption }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage/>}
          />
          <Route
            path="/sport-facility"
            element={
              <SportFacilityPage/>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {isModalOpen && <Modal option={selectedOption} />}
    </ModalContext.Provider>
  );
}

export default App;
