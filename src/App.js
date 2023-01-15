import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Navbar />
    </div>
  );
}

export default App;
