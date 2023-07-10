import React from "react";
import NavLink from "./NavLink";


const NavLinks: React.FC = () => {
  return (
    <div className="nav-links-container">
      <NavLink title="Create" link="posts/new"/>
    </div>
  )
}

export default NavLinks;