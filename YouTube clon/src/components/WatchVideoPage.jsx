import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideoPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="bg-black text-white h-screen w-screen">
      <iframe
        className="lg:h-1/2  lg:w-1/2 lg:m-8 my-5"
        src={`https://www.youtube.com/embed/${videoId}?si=y7YYFvH5PISwPjgU`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideoPage;
