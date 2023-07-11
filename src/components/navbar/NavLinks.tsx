import React, { useContext, useRef } from "react";
import NavLink from "./NavLink";
import { ThemeToggleContext } from "../../ThemeContext";

const NavLinks: React.FC = () => {
  const themeBtn = useRef<HTMLDivElement>(null);
  const toggleTheme = useContext(ThemeToggleContext);

  return (
    <div className="nav-links-container">
      <div className="nav-link" ref={themeBtn} onClick={(e) => toggleTheme!(e)}>
        THEME
      </div>
      <NavLink title="Create" link="posts/new" />
    </div>
  );
};

export default NavLinks;
