import React from "react";
import ButtonsCarousel from "./ButtonsCarousel";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="text-black w-full">
      <ButtonsCarousel />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
