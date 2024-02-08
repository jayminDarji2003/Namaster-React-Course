import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex bg-black h-16 lg:px-5 text-white items-center justify-between sticky top-0 z-50">
      <div className="flex items-center lg:gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <Link to="/">
          <img src="/ytlogo2.png" className="h-6 w-25" alt="YouTube logo" />
        </Link>
      </div>

      <div className="flex items-center h-8 ">
        <div className="flex items-center border-2 border-gray-800 rounded-full p-1 px-4">
          <input
            type="text"
            className="bg-transparent w-[100px] sm:w-[300px] lg:w-[500px] h-8 focus:outline-none text-sm "
            placeholder="search"
          />
          <svg
            className="text-white w-5 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="text-xl flex lg:gap-7 gap-2">
        <i className="fa-solid fa-video hidden md:flex"></i>
        <i className="fa-solid fa-bell hidden md:flex"></i>
        <i className="fa-solid fa-user"></i>
      </div>
    </header>
  );
};

export default Header;
