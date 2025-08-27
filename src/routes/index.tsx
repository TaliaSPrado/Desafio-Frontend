import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CatListPage from "../pages/CatListPage";
import CatGalleryPage from "../pages/CatGalleryPage";
import FormPage from "../pages/FormPage";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes: React.FC = () => (
  <Router>
    <Navbar /> {}
    <Routes>
      <Route path="/" element={<Navigate to="/gatos" />} />
  <Route path="/gatos" element={<CatListPage />} />
  <Route path="/galeria" element={<CatGalleryPage />} />
      <Route path="/formulario" element={<FormPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;