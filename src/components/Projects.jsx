import React from 'react'
import "./Projects.css"
import riddle from "../assets/riddle.png"
import chatApp from "../assets/chatApp.png"
import weather from "../assets/weather.png"
import imageSearch from "../assets/imageSearch.png"
import dictionary from "../assets/dictionary.png"
import Tech from "./Technologies"
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

const Projects = () => {

  const { isDarkMode } = useContext(ThemeContext);

  if (isDarkMode === true) {
    document.body.className = "bg-slate-900"
  }
  else{
    document.body.className = "white"
  }

  return (
    <div className='projects h-auto w-[100%]'> <div></div>

      <h1 className={`myProject w-[100%] h-[100%] text-5xl text-center font-bold ${isDarkMode ? "text-white" : ""}`}>My Projects</h1>

      <div className='project1 h-auto w-[90%] flex justify-self-center rounded-lg'>

        <div className={`img w-[50%] flex justify-center rounded-lg items-center ${isDarkMode ? "bg-slate-500" : "bg-slate-200"}`}>

          <a className="imgBox h-[70%] w-[80%]" target='blank' href="https://mern-chat-app-wyvi.onrender.com/">    <img className='h-[100%] w-[100%] rounded-md cursor-pointer' src={chatApp} alt="" />
          </a>

        </div>

        <div className={`description w-[50%] h-[100%] text-center flex rounded-lg flex-col justify-center items-center p-2 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-100"} `}>
          <h1 className='text-4xl riddle'>RiddleRush</h1><br />
          <p className={`des w-[80%] ${isDarkMode ? "text-slate-100" : "text-zinc-600"}`}>A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for seamless messaging and JWT authentication for secure user access.</p>
          <br />
          <Tech name="React.js" /> <br />
          <Tech name="Node.js" /> <br />
          <Tech name="MongoDB" /> <br />
          <Tech name="Socket.io" /> <br />

          <div className={`link ${isDarkMode ? "text-sky-400" : "text-purple-900"}`}>Live demo: <a target='blank' href="https://mern-chat-app-wyvi.onrender.com/">&nbsp;<i className="fa-solid fa-link text-xl"></i></a></div>
        </div>

      </div>

      <div className='project1 h-auto w-[90%] flex justify-self-center rounded-lg'>

        <div className={`img w-[50%] flex justify-center rounded-lg items-center ${isDarkMode ? "bg-slate-500" : "bg-slate-200"}`}>

          <a className="imgBox h-[70%] w-[80%]" target='blank' href="https://ujjwal-1809.github.io/riddle-rush/">    <img className='h-[100%] w-[100%] rounded-md cursor-pointer' src={riddle} alt="" />
          </a>

        </div>

        <div className={`description w-[50%] h-[100%] text-center flex rounded-lg flex-col justify-center items-center p-2 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-100"} `}>
          <h1 className='text-4xl riddle'>RiddleRush</h1><br />
          <p className={`des w-[80%] ${isDarkMode ? "text-slate-100" : "text-zinc-600"}`}>A fun and interactive riddle game built with React and styled with modern UI components. Challenge yourself with a series of riddles, test your wit, and see how many you can solve!</p>
          <br />
          <Tech name="HTML" /> <br />
          <Tech name="CSS" /> <br />
          <Tech name="Tailwind" /> <br />
          <Tech name="React.js" /> <br />

          <div className={`link ${isDarkMode ? "text-sky-400" : "text-purple-900"}`}>Live demo: <a target='blank' href="https://ujjwal-1809.github.io/riddle-rush/">&nbsp;<i className="fa-solid fa-link text-xl"></i></a></div>
        </div>

      </div>

      <div className='project1 h-[100%] w-[90%] flex justify-self-center rounded-lg'>

      <div className={`img h-[100%] w-[50%] flex justify-center rounded-lg items-center ${isDarkMode ? "bg-slate-500" : "bg-slate-200"}`}>
      <a className="imgBox h-[70%] w-[80%]" target='blank' href="https://ujjwal-1809.github.io/WeatherApp/">    <img className='h-[100%] w-[100%] rounded-md cursor-pointer' src={weather} alt="" />
          </a>
        </div>

        <div className={`description w-[50%] h-[100%] text-center flex rounded-lg flex-col justify-center items-center p-2 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-100"} `}>
          <h1 className='text-4xl riddle'>Weather App</h1><br />
          <p className={`des w-[80%] ${isDarkMode ? "text-slate-100" : "text-zinc-600"}`}>A responsive and user-friendly Weather App built using React.js, Tailwind CSS, and CSS. This application provides real-time weather updates for any location, with a clean and intuitive design to enhance the user experience.</p>
          <br />
          <Tech name="HTML" /> <br />
          <Tech name="CSS" /> <br />
          <Tech name="Tailwind" /> <br />
          <Tech name="React.js" /> <br />

          <div className={`link ${isDarkMode ? "text-sky-400" : "text-purple-900"}`}>Live demo: <a target='blank' href="https://ujjwal-1809.github.io/WeatherApp/">&nbsp;<i className="fa-solid fa-link text-xl"></i></a></div>
        </div>

      </div>

      <div className='project1 h-[100%] w-[90%] flex justify-self-center rounded-lg'>

      <div className={`img h-[100%] w-[50%] flex justify-center rounded-lg items-center ${isDarkMode ? "bg-slate-500" : "bg-slate-200"}`}>
      <a className="imgBox h-[70%] w-[80%]" target='blank' href="https://ujjwal-1809.github.io/Image-search-Engine/">    <img className='h-[100%] w-[100%] rounded-md cursor-pointer' src={imageSearch} alt="" />
          </a>
        </div>

        <div className={`description w-[50%] h-[100%] text-center flex rounded-lg flex-col justify-center items-center p-2 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-100"} `}>
          <h1 className='text-4xl riddle'>Image Search Engine</h1><br />
          <p className={`des w-[80%] ${isDarkMode ? "text-slate-100" : "text-zinc-600"}`}> A web-based image search engine that allows users to search for images based on input keywords. The application fetches images through an external API and displays them in a clean, responsive interface.</p>
          <br />
          <Tech name="HTML" /> <br />
          <Tech name="CSS" /> <br />
          <Tech name="Javascript" /> <br />

          <div className={`link ${isDarkMode ? "text-sky-400" : "text-purple-900"}`}>Live demo: <a target='blank' href="https://ujjwal-1809.github.io/Image-search-Engine/">&nbsp;<i className="fa-solid fa-link text-xl"></i></a></div>
        </div>

      </div>

      <div className='project1 h-[100%] w-[90%] flex justify-self-center rounded-lg'>

      <div className={`img h-[100%] w-[50%] flex justify-center rounded-lg items-center ${isDarkMode ? "bg-slate-500" : "bg-slate-200"}`}>
      <a className="imgBox h-[70%] w-[80%]" target='blank' href="https://ujjwal-1809.github.io/Dictionary/">    <img className='h-[100%] w-[100%] rounded-md cursor-pointer' src={dictionary} alt="" />
          </a>
        </div>

        <div className={`description w-[50%] h-[100%] text-center flex rounded-lg flex-col justify-center items-center p-2 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-100"} `}>
          <h1 className='text-4xl riddle'>WordWiz Dictionary</h1><br />
          <p className={`des w-[80%] ${isDarkMode ? "text-slate-100" : "text-zinc-600"}`}> A dictionary web application that allows users to search for word definitions, pronunciations, and related information. The app fetches data from an external dictionary API and provides an easy-to-use interface where users can explore meanings and hear the pronunciation of words.</p>
          <br />
          <Tech name="HTML" /> <br />
          <Tech name="CSS" /> <br />
          <Tech name="Javascript" /> <br />

          <div className={`link ${isDarkMode ? "text-sky-400" : "text-purple-900"}`}>Live demo: <a target='blank' href="https://ujjwal-1809.github.io/Dictionary/">&nbsp;<i className="fa-solid fa-link text-xl"></i></a></div>
        </div>

      </div> <br />

    </div>
  )
}

export default Projects;