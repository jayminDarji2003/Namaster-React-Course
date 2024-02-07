import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, SetVideoData] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const videos = await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const data = await videos.json();
    console.log(data.items);
    SetVideoData(data?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => {
        return <VideoCard videoInfo={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
