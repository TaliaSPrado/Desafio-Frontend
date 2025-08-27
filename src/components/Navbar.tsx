import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="navbar-main">
      <Link
        to="/gatos"
        className={"navbar-link" + (location.pathname === "/gatos" ? " active" : "")}
      >
        Lista de gatos
      </Link>
      <Link
        to="/galeria"
        className={"navbar-link" + (location.pathname === "/galeria" ? " active" : "")}
      >
        Galeria
      </Link>
      <Link
        to="/formulario"
        className={"navbar-link" + (location.pathname === "/formulario" ? " active" : "")}
      >
        Formulário
      </Link>
    </nav>
  );
};

export default Navbar;