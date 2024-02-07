import React from "react";

const VideoCard = ({ videoInfo }) => {
  return (
    <div className="border-2 text-white m-5 w-72 rounded-lg">
      <img
        className="text-center"
        src={videoInfo?.snippet?.thumbnails.medium.url}
        alt="Image"
      />
      <div className="p-3">
        <p className=" text-xl font-semibold">{videoInfo?.snippet?.title}</p>
        <p className="text-gray-300 text-sm font-bold my-1">
          {videoInfo?.snippet?.channelTitle}
        </p>
        <div className="text-gray-300 text-xs flex gap-4 my-1">
          <p>{videoInfo?.statistics?.viewCount} Views</p>
          <p>.</p>
          <p>{videoInfo?.statistics?.likeCount} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
