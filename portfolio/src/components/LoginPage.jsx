import React, { useState, useEffect } from "react";
import { formatDate, formatTime } from "../utils/utils";
import LoadingScreen from "../utils/LoadingScreen";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBlurred, setIsBlurred] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onBackgroundClick = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setupIntroPage();
    } else {
      setIsBlurred(!isBlurred);
    }
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("Username", username);
    setIsBlurred(false);
    setupIntroPage();
  };

  const setupIntroPage = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate("/welcome");
    }, 2000)
  }

  return (
    <>
      {loading ? <LoadingScreen /> : <></>}
      
      <div
        className={`w-screen h-screen z-50 bg-[url('assets/images/login.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-500 ${
          isBlurred ? "backdrop-blur-md" : ""
        }`}
        onClick={onBackgroundClick}
      >
        {isBlurred && (
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md transition-all duration-500"></div>
        )}

        <div
          className={`flex flex-col relative z-20 px-8 py-20 transition-opacity duration-500 w-full h-screen justify-start items-center md:items-start md:justify-end ${
            isBlurred ? "opacity-20" : "opacity-100"
          }`}
        >
          <span className="text-8xl text-white font-bold md:text-9xl">
            {formatTime(currentTime)}
          </span>
          <span className="text-white text-xl md:text-5xl">
            {formatDate(currentTime)}
          </span>
        </div>

        {isBlurred && (
          <div 
            className="absolute z-52 bg-white p-8 rounded-lg shadow-lg w-[90%] h-[40vh] text-center 
            flex flex-col justify-evenly items-center md:w-[50%]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-black">Welcome to my Profile</h2>
            <input
              type="text"
              placeholder="Enter your Name (Min 3 chars)"
              className="w-[90%] p-2 rounded-md border border-gray-400 placeholder-gray-300 text-black"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button 
              className={`w-[80%] p-2 bg-[#83d688] text-black font-bold rounded-md 
                ${
                  username.length < 3
                    ? "bg-[#ddd] cursor-not-allowed"
                    : "hover:bg-[#3e8e41] hover:text-white hover:cursor-pointer transition-[0.5s]"
                }`}
                onClick={handleLogin}
            >
              Login
            </button>
          </div>
        
        )}
      </div>
    </>
  );
};

export default LoginPage;