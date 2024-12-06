import React from 'react';
import "./Sidebar.css";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";

const Sidebar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const [position, setPosition] = useState("");

    const toggleSidebar = () => {
        setPosition("open")
    }

    const toggleClose = () => {
        setPosition("")
    }

    return <div> <nav className={`h-[9%] w-[230%] fixed ${isDarkMode ? "dark bg-slate-900" : "bg-white"}`}>
        <div className='flex justify-between w-[100%]'>
            <i onClick={toggleSidebar} className={`fa-solid fa-bars text-2xl ${isDarkMode ? "text-white" : "text-black"}`}></i>
            <i onClick={toggleTheme} className={`text-2xl mr-2 ${isDarkMode ? "fa-solid fa-sun text-white" : "fa-solid fa-moon text-black"}`}>
            </i>
        </div>
    </nav>

        <aside className={`${isDarkMode ? "bg-slate-900 text-white toggleInDark" : "bg-white text-black "} ${position}`} >

            <div className='flex justify-between' onClick={toggleClose} ><NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
                <button onClick={toggleClose}><i className="fa-regular fa-circle-xmark"></i></button>
            </div>

            <div onClick={toggleClose} > <i className="fa-regular fa-user"></i><NavLink className="ml-2" to="/about">About</NavLink></div>
            <div onClick={toggleClose}> <i className="fa-regular fa-paper-plane"></i> <NavLink to="/projects">Projects</NavLink></div>
            <div onClick={toggleClose} > <i className="fa-solid fa-star-of-david"></i> <NavLink to="/skills">Skills</NavLink></div>
            <div onClick={toggleClose} >  <i className="fa-solid fa-phone"></i> <NavLink to="/contact">Contact</NavLink></div>

            <div >
                <i className="fa-solid fa-file"></i>{" "}
                <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume
                </a> </div>
        </aside>

    </div>
}

export default Sidebar