import React from "react";
import { Link } from "react-router-dom";


interface Props {
  title: string,
  link: string
}

const NavLink: React.FC<Props> = ({ title, link }) => {
  return (
    <Link to={link} className="nav-link">{title}</Link>
  )
}

export default NavLink;