import React from "react";
import { sidebarItems } from "../constants";
import { useSelector } from "react-redux";

const SidebarItem = ({ iconClass, text }) => {
  return (
    <div className="flex items-center py-3 px-2 cursor-pointer rounded-lg gap-5 hover:bg-[#272727]">
      <i className={`fa-solid ${iconClass}`}></i>
      <p>{text}</p>
    </div>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return (
      <div className="pl-3 text-white mb-6">
        <div>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} iconClass={item.iconClass} text="" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pl-3 w-44 text-white mb-6">
      <div>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            iconClass={item.iconClass}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
