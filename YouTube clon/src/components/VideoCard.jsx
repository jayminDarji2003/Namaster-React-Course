import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { thumbnails, title,channelTitle } = snippet;

  return (
    <div className="border-2 text-white m-5 w-72 rounded-lg">
      <img className="text-center rounded-lg hover:scale-110" src={thumbnails?.medium?.url} alt="Image" />
      <div className="p-3">
        <p className=" text-xl font-semibold">{title.slice(0,35)}...</p>
        <p className="text-gray-300 text-sm font-bold my-1">
          {channelTitle}
        </p>
        <div className="text-gray-300 text-xs flex gap-4 my-1">
          <p>{statistics?.viewCount} Views</p>
          <p>.</p>
          <p>{statistics?.likeCount} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
