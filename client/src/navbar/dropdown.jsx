import React, { useState } from "react";
import { jobsDropdown } from "./navitems";
import { Link } from "react-router-dom";
import "./index.css";
const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "jobs-submenu clicked" : "jobs-submenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      {jobsDropdown.map((item) => {
        return (
          <li key={item.id} className={item.cName}>
            <Link to={item.path} onClick={() => setDropdown(false)}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
