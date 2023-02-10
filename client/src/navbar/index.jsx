import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";
import "./hamburger.css";
import { navItems } from "./navitems";
import Dropdown from "./dropdown";
import { useState } from "react";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [dropdown, setDropdown] = useState(false);
  const [burger, setBurger] = useState(false);
  return (
    <>
      {isNonMobileScreens && (
        <div className="navbar">
          <Link to="/" className="navbar-logo">
            TheITJobBoard
          </Link>
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.title === "Jobs") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              } else {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onClick={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
      {!isNonMobileScreens && (
        <div className="navbar">
          <Link to="/" className="navbar-logo">
            TheITJobBoard
          </Link>
          <div
            class={burger ? "menu-btn open" : "menu-btn"}
            onClick={() => {
              setBurger(!burger);
            }}
          >
            <div class="menu-btn__burger"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
