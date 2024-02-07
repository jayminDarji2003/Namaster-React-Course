import React from "react";
import ButtonsCarousel from "./ButtonsCarousel";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="bg-gray-100 text-black w-full">
      <ButtonsCarousel />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
