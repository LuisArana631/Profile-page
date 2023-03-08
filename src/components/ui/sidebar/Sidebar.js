import React, { useState } from "react";

import "./Sidebar.css";

import { Link } from "react-scroll";
import { faBars, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation = require("../../../constants/navigation");

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[btnIcon, setBtnIcon] = useState(faBars)
  const[btnClass, setBtnClass] = useState('sidebar-btn')

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (isOpen) {
      setBtnIcon(faArrowUp)
      setBtnClass('sidebar-btn sidebar-btn-hover')
    } else {
      setBtnIcon(faArrowDown)
      setBtnClass('sidebar-btn sidebar-btn-hover')
    }
  }

  const handleMouseLeave = () => {
    setBtnIcon(faBars)
    setBtnClass('sidebar-btn')
  }

  return (
    <>
      <button
        className={btnClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToogle}
      >
        <span className="sidebar-title mr-2">Luis Arana</span>
        <FontAwesomeIcon className="sidebar-title ml-2" icon={btnIcon} />
      </button>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="side-items">
          {navigation.sidebar.map((item) => (
            <li key={`${item.to}navbar`} className={item.className}>
              <Link
                activeClass={item.activeClass}
                to={item.to}
                spy={item.spy}
                smooth={item.smooth}
                duration={item.duration}
                offset={item.offset}
                onClick={handleToogle}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
