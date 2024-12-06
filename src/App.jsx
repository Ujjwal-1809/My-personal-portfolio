import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [useNavbar, setUseNavbar] = useState(window.innerWidth > 700);

  useEffect(() => {
    const handleResize = () => {
      setUseNavbar(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <div className="h-screen w-[100%]">
            {useNavbar ? <Navbar /> : <Sidebar />}
            <Home />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div className="h-screen w-[100%]">
            {useNavbar ? <Navbar /> : <Sidebar />}
            <About />
          </div>
        ),
      },
      {
        path: "/projects",
        element: (
          <div className="h-screen  w-[100%] relative">
            {useNavbar ? <Navbar /> : <Sidebar />}
            <Projects />
          </div>
        ),
      },
      {
        path: "/skills",
        element: (
          <div className="h-screen w-[100%]">
            {useNavbar ? <Navbar /> : <Sidebar />}
            <Skills />
          </div>
        ),
      },
      {
        path: "/contact",
        element: (
          <div className="h-screen w-[100%]">
            {useNavbar ? <Navbar /> : <Sidebar />}
            <Contact />
          </div>
        ),
      },
    ]
  );

  return <RouterProvider router={router} />;
}

export default App;
