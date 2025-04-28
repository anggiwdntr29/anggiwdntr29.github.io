import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
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
import "../i18n";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
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
