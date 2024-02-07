import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="bg-black text-white flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
