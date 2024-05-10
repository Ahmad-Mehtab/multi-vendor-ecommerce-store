import React from "react";
import { navItems } from "../../static/Data";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import styles from "../../styles/styles";

function Navbar() {
  return (
    <div className={`${styles.noramlFlex}`}>
      <div className="flex gap-16">
        
        {navItems && navItems.map((item, index) => (
          <NavLink 
          to={item.url} 
          key={index} 
          // activeClassName="active"
          className={`text-[#fff] font-semibold cursor-pointer ${location.pathname === item.url ? 'font-medium text-[#5cec49]' : ''}`}

        >
          {item.title}
        </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
