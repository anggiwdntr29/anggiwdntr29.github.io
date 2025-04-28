import { Menu, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";

const Layout = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Indonesia" : "English"));
  };

  const openSidebar = () => {
    setSideBarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  const CustomLink = ({ to, label, onClick }) => {
    return (
      <NavLink to={to} onClick={onClick}>
        <h1 className="inline-block relative group cursor-pointer">
          <span>{label}</span>
          <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </h1>
      </NavLink>
    );
  };

  return (
    <section className="px-6 md:px-10 flex flex-col py-4 min-h-screen max-w-screen-xl mx-auto ">
      <aside
        className={`w-3/5 h-full bg-white fixed top-0 left-0 p-4 z-50 duration-500 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-2xl font-semibold mb-5">
          <NavLink to={"/"} onClick={closeSidebar}>
            <h1 className="inline-block relative group cursor-pointer">
              <span>AnggiWdntr</span>
            </h1>
          </NavLink>
        </div>
        <div className="flex flex-col text-base font-medium gap-5">
          <CustomLink to={"/about"} label={"About"} onClick={closeSidebar} />
          <CustomLink
            to={"/my-work"}
            label={"Project"}
            onClick={closeSidebar}
          />
          <CustomLink to={"/post"} label={"Post"} onClick={closeSidebar} />
          <CustomLink
            to={"/contact"}
            label={"Contact"}
            onClick={closeSidebar}
          />
        </div>
      </aside>
      <nav className="flex justify-between items-center mb-6 font-sansation ">
        <div className="text-2xl font-semibold">
          <NavLink to={"/"}>
            <h1 className="inline-block relative group cursor-pointer">
              <span>AnggiWdntr</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </h1>
          </NavLink>
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg font-medium">
          <CustomLink to={"/about"} label={"About"} />
          <CustomLink to={"/my-work"} label={"Project"} />
          <CustomLink to={"/post"} label={"Post"} />
          <CustomLink to={"/contact"} label={"Contact"} />
        </div>
        <div className="hidden md:flex w-auto md:w-20 text-center md:text-right text-base md:text-lg font-medium">
          <button onClick={changeLanguage}>
            <h1 className="inline-block relative group cursor-pointer">
              <span>{language}</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </h1>
          </button>
        </div>
        <button className="flex md:hidden" onClick={openSidebar}>
          <div
            className={`transition-transform duration-500 ${
              sidebarOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            {sidebarOpen ? <Plus size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </nav>
      <main
        className={`flex-1 md:px-20 lg:px-28 ${
          sidebarOpen ? "blur-xs" : "blur-none"
        }`}
      >
        <Outlet />
      </main>
      <footer className="flex flex-col justify-center items-center text-sm text-gray-400 mt-8">
        <div className="border-b border w-full md:w-10/12 mb-2"></div>
        <p className="text-xs md:text-base font-normal mb-1">
          Built with ❤︎ by AnggiWdntr
        </p>
        <p className="text-xs md:text-base font-normal">
          &copy; 2025 All rights reserved.
        </p>
      </footer>
      {/* </div> */}
    </section>
  );
};

export default Layout;
