import React from 'react'
import "./Home.css"
import myImg from "../assets/myImg.jpg"
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

const Home = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (    
    <div id='home' className= {`${isDarkMode ? "text-white bg-slate-900" : "bg-white"}`}>
<div></div>
      <div className= "shortDes justify-self-center h-[89vh] flex flex-col justify-center w-[70%] text-center ">
        <h1 className='hey text-5xl '>Hey! I'm <span className={`text-6xl ${isDarkMode ? "text-sky-400" : "text-red-800"}`}>Ujjwal</span> &#128075;</h1>
        <p className={`mt-8 mb-8 para text-sm font-bold ${isDarkMode ? "text-slate-200" : "text-slate-500"}`}>Aspiring Web Developer with a strong foundation in frontend and backend technologies. Proficient in HTML, CSS, 
JavaScript and MERN stack with hands-on experience in building and deploying personal projects. Passionate about creating 
user-friendly, responsive, and scalable applications. <br /> Seeking an entry-level position to apply my skills, enhance my expertise in 
full-stack development, and gain real-world experience in the industry. </p> 
        <p className='text-blue-700 font-bold text-start'><i className="fa-solid fa-location-dot"></i> Prayagraj, Uttar Pradesh</p>
        <div className='flex'>
          <div className='dot h-3 w-3 mt-2 bg-green-500 rounded-full relative'></div>
          <h2 className='text-start ml-2 mt-[2px] font-bold'>Available for work</h2>
        </div>
      </div>

      <div className='myImg justify-self-center self-center h-[300px] w-[300px] rounded-full bg-cover bg-center'
        style={{ backgroundImage: `url(${myImg})` }}></div>
       
    </div>
  )
}

export default Home