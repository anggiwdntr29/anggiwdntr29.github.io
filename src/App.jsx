import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import {
  About,
  ContactMe,
  DetailPost,
  DetailProject,
  Home,
  MyWork,
  Post,
} from "./pages";
import Layout from "./layout";

// Komponen terpisah untuk menangani scroll
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// Aplikasi utama
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ScrollToTop di dalam BrowserRouter */}
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/post" element={<Post />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/post/:id" element={<DetailPost />} />
          <Route path="/my-work/:id" element={<DetailProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
