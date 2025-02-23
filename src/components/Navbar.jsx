import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <nav>
          <ul className={isNavOpen ? "open" : ""}>
            <li>
              <NavLink to="/reactportfolio">Home</NavLink>
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
