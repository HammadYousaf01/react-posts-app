import React from "react"

interface Props {
  title: string
}

const NavTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="nav-title-container">
      <h1 className="nav-title">{title}</h1>
    </div>
  )
}

export default NavTitle;