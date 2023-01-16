import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./../App.css";
import Achievement from "./pages/Pencapaian";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

export default function Navbar() {
  return (
    <div className="Navbar-Container">
      <ul className="Menu">
        <NavLink to="/">
          <div className="List-Menu">
            <i className="fa-sharp fa-solid fa-bookmark"></i>Blog
          </div>
        </NavLink>
        <NavLink to="/Portfolio">
          <div className="List-Menu">
            <i className="fa-solid fa-pen-nib"></i>Portfolio
          </div>
        </NavLink>
        <NavLink to="/Achievement">
          <div className="List-Menu">
            <i className="fa-solid fa-star"></i>Achievement
          </div>
        </NavLink>
      </ul>
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/" element={<Blog />} />
        <Route path="/Achievement" element={<Achievement />} />
      </Routes>
    </div>
  );
}
