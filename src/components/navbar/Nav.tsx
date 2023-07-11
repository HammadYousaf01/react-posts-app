import React, { useContext, useEffect, useRef } from "react";

import NavTitle from "./NavTitle";
import NavLinks from "./NavLinks";
import "./styles/nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <NavTitle title={"React Posts App"} />
      <NavLinks />
    </nav>
  );
};

export default Nav;
