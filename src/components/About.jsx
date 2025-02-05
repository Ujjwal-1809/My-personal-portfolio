import React from 'react'
import "./About.css";
import aboutImg from "../assets/aboutMe.jpg";
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div id='about' className= {`${isDarkMode ? "bg-slate-900 text-white" : "bg-white"}`}>
      <div></div>
      <div className='text-center w-[90%] h-[89vh] justify-self-center flex flex-col justify-center gap-y-6'>
        <h1 className='text-5xl me'>About me...</h1>
        <p id='aboutPara' className= {`${isDarkMode ? "text-slate-200" : "text-zinc-600"}`}>Hi, I’m Ujjwal! I graduated in 2024 with a BBA degree and initially pursued roles in marketing and sales. However, I soon realized my true passion lies in web development. Since then, I’ve been learning and honing my skills in HTML, CSS, JavaScript, and MERN stack.

I enjoy creating user-friendly and visually appealing web applications. <br /> <br /> My projects showcase my ability to combine creativity with functionality.

When I’m not coding, you can find me playing cricket or billiards, activities that keep me active and inspired.<br /> <br /> Feel free to explore my work or get in touch—I’d love to connect! &#10084;</p>
      </div>

      <div className={`aboutImg h-[70%] w-[70%] border-[4px] box-border self-center bg-cover bg-center ${isDarkMode ? "border-slate-100" : "border-slate-600"}`}
      style={{ backgroundImage: `url(${aboutImg})` }}></div>
      <div></div>
    </div>
  )
}

export default About