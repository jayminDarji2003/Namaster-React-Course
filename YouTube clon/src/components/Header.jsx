import React from "react";

const Header = () => {
  return (
    <header className="flex bg-black  text-white items-center justify-between">
      <div className="flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <img src="/ytlogo.png" className="h-20" alt="YouTube logo" />
      </div>

      <div>
        <div className="flex border-2 border-gray-800 rounded-full p-1 px-4">
          <input
            type="text"
            className="bg-transparent w-96 h-8 focus:outline-none text-sm"
            placeholder="search"
          />
          <svg
            className="text-white w-5 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
