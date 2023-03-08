import "./Navbar.css";

import { Link } from "react-scroll";

const navigation = require("../../../constants/navigation");

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">Luis Arana</div>
      <ul className="nav-items">
        {navigation.navbar.map((item) => (
          <li key={`${item.to}navbar`} className={item.className}>
            <Link
              activeClass={item.activeClass}
              to={item.to}
              spy={item.spy}
              smooth={item.smooth}
              duration={item.duration}
              offset={item.offset}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
