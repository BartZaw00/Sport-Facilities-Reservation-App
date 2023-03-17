import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { HomePage, SportFacilityPage, ErrorPage } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sport-facility" element={<SportFacilityPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
