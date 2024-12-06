import React from 'react';
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

const Technologies = (props) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`tech h-7 font-bold flex justify-center items-center w-24 text-sm box-border rounded-xl text-center border-2 ${isDarkMode ? "bg-slate-700" : "bg-slate-300 border-slate-400"}`}>{props.name}</div>
  )
}

export default Technologies;