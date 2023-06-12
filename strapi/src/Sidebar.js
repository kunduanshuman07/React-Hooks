import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      \
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            return <p>page</p>;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
