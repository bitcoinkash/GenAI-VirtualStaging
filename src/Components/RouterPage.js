import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import PricesPage from "./PricesPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import PopUp from "./PopUp";
import { Routes, Route} from "react-router-dom";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/popup" element={<PopUp />} />
    </Routes>
  );
}

export default RouterPage;
