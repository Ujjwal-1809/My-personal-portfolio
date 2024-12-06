import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`h-[11%] w-[100%] font-bold fixed z-10 ${isDarkMode ? "dark bg-slate-900" : ""
        }`}
    >
      <div className="homeIcon ml-4">
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
        </NavLink>
      </div>
      <div className="link flex flex-col">
        <i className="fa-regular fa-user"></i>
        <NavLink to="/about"> About</NavLink>
      </div>
      <div className="link flex flex-col">
        <i className="fa-regular fa-paper-plane"></i>{" "}
        <NavLink to="/projects">Projects</NavLink>
      </div>
      <div className="link flex flex-col">
        <i className="fa-solid fa-star-of-david"></i>{" "}
        <NavLink to="/skills"> Skills</NavLink>
      </div>
      <div className="link flex flex-col">
        <i className="fa-solid fa-phone"></i>{" "}
        <NavLink to="/contact"> Contact</NavLink>
      </div>
      <div className="link flex flex-col">
        <i className="fa-solid fa-file"></i>{" "}
        <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume
        </a>
      </div>
      <div className="text-2xl cursor-pointer">
        <i
          onClick={toggleTheme}
          className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
