import React from "react";
import * as Pages from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location}>
        <Route path="/" index element={<Pages.MainPage />} />
        <Route path="interactive-map" element={<Pages.InteractiveMapPage />} />
        <Route path="apnea-trainer" element = {<Pages.ApneaTrainerPage/>}/>
        <Route path = "species-explorer" element = {<Pages.SpeciesExplorerPage/>}/>
      </Routes>
    </>
  );
}

export default App;
