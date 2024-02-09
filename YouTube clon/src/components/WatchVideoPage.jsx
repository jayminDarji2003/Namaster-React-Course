import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import SuggestedVideo from "./SuggestedVideo";
import CommentContainer from "./Comments";

const WatchVideoPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ`;
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, [searchParams]);

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(url);
    const json = await data.json();
   // console.log(json);
    setVideoInfo(json?.items[0]);
  };

  return (
    <div className="bg-black text-white w-screen flex lg:m-8 my-5 gap-5">
      <div>
        <iframe
          className="lg:h-[500px] lg:w-[900px] rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?si=y7YYFvH5PISwPjgU`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="my-4">
          <p className="font-bold text-xl">{videoInfo?.snippet?.title}</p>
          <div className="flex gap-5 my-5 items-center">
            <div className="flex gap-5">
              <p className="font-bold text-2xl">
                {videoInfo?.snippet?.channelTitle}
              </p>
              <button className="bg-white p-2 px-3 rounded-full text-black font-bold">
                Subscribe
              </button>
            </div>
            <div className="flex gap-5 text-xl flex-wrap">
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-eye"></i>
                <p>{videoInfo?.statistics?.viewCount}</p>
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-thumbs-up"> </i>
                <p>{videoInfo?.statistics?.likeCount}</p>
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-star"></i>
                <p>{videoInfo?.statistics?.favoriteCount}</p>
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-comment"></i>
                <p>{videoInfo?.statistics?.commentCount}</p>
              </div>
            </div>
          </div>

          {/* description section  */}
          <div className="my-5 p-3 lg:w-[800px] border-2 border-gray-600 rounded-2xl">
            <p className="font-bold text-lg my-1">Description</p>
            <p>{videoInfo?.snippet?.description}</p>
          </div>

          {/* comment section  */}
          <CommentContainer />
        </div>
      </div>

      <div className="">
        <SuggestedVideo />
      </div>
    </div>
  );
};

export default WatchVideoPage;
