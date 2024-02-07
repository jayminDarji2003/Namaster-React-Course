import React from "react";

const Sidebar = () => {
  return (
    <div className="pl-5 w-44 text-white mb-6">
      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
      </div>

      <div className="flex items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-video"></i>
        <p>Shorts</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-box"></i>
        <p>Subscriber</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-user"></i>
        <p>Your Channel</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-clock"></i>
        <p>History</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-camera"></i>
        <p>Videos</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-regular fa-clock"></i>
        <p>Watch Later</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-thumbs-up"></i>
        <p>Liked Videos</p>
      </div>

      <hr className="my-5" />
      <p className="font-bold">Explore</p>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-stairs"></i>
        <p>Trending</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Shopping</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-music"></i>
        <p>Music</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-film"></i>
        <p>Film</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-star-of-life"></i>
        <p>Live</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-headset"></i>
        <p>Gaming</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-newspaper"></i>
        <p>News</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-medal"></i>
        <p>Spots</p>
      </div>

      <div className="flex  items-center py-3 hover:px-2 cursor-pointer rounded-lg gap-5 hover:bg-gray-900">
        <i class="fa-solid fa-chalkboard"></i>
        <p>Learnings</p>
      </div>
    </div>
  );
};

export default Sidebar;
