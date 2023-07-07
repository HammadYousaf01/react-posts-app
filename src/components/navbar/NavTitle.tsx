import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string
}

const NavTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="nav-title-container">
      <Link to="/" style={{color: "white", textDecoration: "none"}}><h1 className="nav-title">{title}</h1></Link>
    </div>
  )
}

export default NavTitle;