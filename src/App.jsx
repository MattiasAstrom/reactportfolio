import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EasterEggs from "./components/EasterEggs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import Game from "./pages/Game";

function App() {
  return (
    <>
      <BrowserRouter basename="/reactportfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
        <Footer />
        <EasterEggs />
      </BrowserRouter>
    </>
  );
}

export default App;
