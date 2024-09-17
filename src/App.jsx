import React from "react";
import PhoneMockup from "./components/phoneMockup";
import Header from "./components/header";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <PhoneMockup>
          <Header />
          <Outlet />
          <NavBar />
      </PhoneMockup>
    </div>
  );
}

export default App;
