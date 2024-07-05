import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaHome } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import "./index.css";

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState("home");
  const [activeSideBar, setActiveSidebar] = useState(true);
  let screenSizeOf = window.innerWidth;
  const handleCloseSideBar = () => {
    if (activeSideBar !== undefined && screenSizeOf <= 900) {
      setActiveSidebar(false);
    }
  };

  const handleAll = (event) => {
    handleCloseSideBar();
    setActiveRoute(event.target.value);
  };

  useEffect(() => {
    handleCloseSideBar();
  }, [activeRoute]);

  return (
    <div>
      <div>
        <button
          className="logoBurger"
          type="button"
          onClick={() => setActiveSidebar((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className={activeSideBar ? "sidebarContainer" : "sidebarContainerNone"}
      >
        <Link to="/">
          <button
            className={
              activeRoute === "home"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="home"
            onClick={handleAll}
          >
            <FaHome /> {"   "}
            Home
          </button>
        </Link>
        <Link to="/Dashboard">
          <button
            className={
              activeRoute === "Dashboard"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="Dashboard"
            onClick={handleAll}
          >
            <TbGridDots /> Dashboard
          </button>
        </Link>
        <h4 style={{ textAlign: "left", width: "180px" }} className="pt-4">
          Services
        </h4>
        <Link to="/Airports">
          <button
            className={
              activeRoute === "Airports"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="Airports"
            onClick={handleAll}
          >
            Airports
          </button>
        </Link>
        <Link to="/Videos">
          <button
            className={
              activeRoute === "Videos"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="Videos"
            onClick={handleAll}
          >
            Videos
          </button>
        </Link>
        <h4 style={{ textAlign: "left", width: "180px" }} className="pt-4">
          Others
        </h4>
        <Link to="/List 1">
          <button
            className={
              activeRoute === "List 1"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="List 1"
            onClick={handleAll}
          >
            List 1
          </button>
        </Link>
        <Link to="/List 2">
          <button
            className={
              activeRoute === "List 2"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="List 2"
            onClick={handleAll}
          >
            List 2
          </button>
        </Link>{" "}
        <Link to="/List 3">
          <button
            className={
              activeRoute === "List 3"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="List 3"
            onClick={handleAll}
          >
            List 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
