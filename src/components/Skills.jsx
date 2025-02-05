import React from 'react';
import "./Skills.css"
import htmlIcon from "../assets/html-icon.svg"
import CSSIcon from "../assets/css-icon.svg"
import javascript from "../assets/javascript.svg"
import reactjs from "../assets/reactjs.svg"
import tailwind from "../assets/tailwind.svg"
import node from "../assets/node.svg"
import zustand from "../assets/zustand.svg"
import mongodb from "../assets/mongodb.svg"
import git from "../assets/git.svg"
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

const Skills = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
   <div id='container' className={`h-screen w-[100%] ${isDarkMode ? "bg-slate-900" : "bg-white"}`}><br />
    <div className={`heading font-bold w-[100%] text-center text-5xl ${isDarkMode ? "text-white" : "text-slate-900"}`}>My Tech Skills</div>

    <div className={`skills w-[100%] h-[90%] ${isDarkMode ? "text-white" : "text-zinc-600"}`}>

<a  className='h-[90%]' target='blank' href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img className='iconImg h-[60%]' src= {htmlIcon} alt="" />
<div className="skillName text-center text-xl font-bold">HTML</div></a>

<a className='h-[90%]' target='blank' href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img className='iconImg h-[60%]' src= {CSSIcon} alt="" />
<div className="skillName text-center text-xl font-bold">CSS</div></a>
<a className='h-[90%]' target='blank' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">  <img className='iconImg h-[60%]' src= {javascript} alt="" />
<div className="skillName text-center text-xl font-bold">Javascript</div></a>
<a className='h-[90%]' target='blank' href="https://react.dev/">  <img className='iconImg h-[60%]' src= {reactjs} alt="" />
<div className="skillName text-center text-xl font-bold">React</div></a>
<a className='h-[90%]' target='blank' href="https://tailwindcss.com/">  <img className='iconImg h-[60%]' src= {tailwind} alt="" />
<div className="skillName text-center text-xl font-bold">Tailwind CSS</div></a>
<a className='h-[90%]' target='blank' href="https://git-scm.com/">  <img className='iconImg h-[60%]' src= {git} alt="" />
<div className="skillName text-center text-xl font-bold">Git</div></a>
<a className='h-[90%]' target='blank' href="https://nodejs.org/en">  <img className='iconImg h-[60%]' src= {node} alt="" />
<div className="skillName text-center text-xl font-bold">Node</div></a>
<a className='h-[90%]' target='blank' href="https://zustand-demo.pmnd.rs/">  <img className='iconImg h-[60%]' src= {zustand} alt="" />
<div className="skillName text-center text-xl font-bold">Zustand</div></a>
<a className='h-[90%]' target='blank' href="https://www.mongodb.com/">  <img className='iconImg h-[60%] ml-4' src= {mongodb} alt="" />
<div className="skillName text-center text-xl font-bold">MongoDB</div></a>

    </div>
   </div>
  )
}

export default Skills;