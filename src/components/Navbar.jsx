import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <NavLink to="/" className="logo">
          <h2>
            Portfo<span>lio</span>
          </h2>
        </NavLink>
        <nav>
          <ul className={isNavOpen ? "open" : ""}>
            <li>
              <NavLink to="/Game">3D</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Cv">CV</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <p className="toggle-input" onClick={() => setIsNavOpen(!isNavOpen)}>
          ☰
        </p>
      </header>
    </>
  );
}
