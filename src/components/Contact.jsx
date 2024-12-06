import React, { useState, useContext } from "react";
import "./Contact.css";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [copiedField, setCopiedField] = useState(null);

  const contactNo = "+91 8957193330";
  const email = "ujjwalssharma12@gmail.com";

  const copyToClipboard = (text, field) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedField(field);
          setTimeout(() => setCopiedField(null), 1000);
        })
        .catch((err) => {
          alert("Failed to copy: ", err);
        });
    } else {

      // Fallback for unsupported browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1000);
      } catch (err) {
        alert("Fallback failed to copy text: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div id="cont" className={`h-screen w-[100%] ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
      <br />
      <h1 className={`heading font-bold w-[100%] text-center text-7xl self-end ${isDarkMode ? "text-white" : "text-black"}`}>
        Feel free to connect! &#129309;
      </h1>

      <div className="flex flex-col self-start items-center gap-6 w-[100%]">
        {/* Email */}
        <h2 className={`email font-bold text-3xl relative flex items-center ${isDarkMode ? "text-purple-500" : "text-slate-500"}`}>
          <i className="fa-regular fa-envelope"></i> &nbsp; {email}
          <span className="relative flex items-center">
            <i
              onClick={() => copyToClipboard(email, "email")}
              className="fa-regular fa-copy cursor-pointer p-2 rounded-md"
              aria-label="Copy email to clipboard"
            ></i>
            {copiedField === "email" && (
              <span className="tooltip-right absolute top-0 left-12 px-2 py-1">
                <i className="text-green-400 fa-solid fa-check"></i>
              </span>
            )}
          </span>
        </h2>

        {/* Phone Number */}
        <h2 className={`phone font-bold text-3xl relative flex items-center ${isDarkMode ? "text-purple-500" : "text-slate-500"}`}>
          <i className="fa-solid fa-phone"></i> &nbsp; {contactNo}
          <span className="relative flex items-center">
            <i
              onClick={() => copyToClipboard(contactNo, "phone")}
              className="fa-regular fa-copy cursor-pointer p-2 rounded-md"
              aria-label="Copy phone number to clipboard"
            ></i>
            {copiedField === "phone" && (
              <span className="tooltip-right absolute top-0 left-12 px-2 py-1">
                <i className="text-green-400 fa-solid fa-check"></i>
              </span>
            )}
          </span>
        </h2>

        {/* Social Media Links */}
        <h1 className={`font-thin text-center font-serif text-3xl ${isDarkMode ? "text-slate-100" : "text-black"}`}>
          You may also find me on these platforms!
        </h1>

        <div className="gap-x-4 flex w-[100%] justify-center border-t-2 border-b-2 border-slate-400 p-2">
          <a
            target="blank"
            href="https://www.linkedin.com/in/ujjwal-sharma-823a052ab/"
            className={`${isDarkMode ? "text-blue-400" : "text-blue-900"} hover:underline`}
          >
            <i className="fa-brands fa-linkedin text-3xl linkedin"></i>
          </a>

          <a
            target="blank"
            href="https://github.com/Ujjwal-1809"
            className={`${isDarkMode ? "text-white" : "text-black"} hover:underline`}
          >
            <i className="fa-brands fa-github text-3xl github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
