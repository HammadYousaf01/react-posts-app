import React from "react"


interface Props {
  title: string
}

const NavLink: React.FC<Props> = ({ title }) => {
  return (
    <div className="nav-link">{title}</div>
  )
}

export default NavLink;