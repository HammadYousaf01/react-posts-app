import NavTitle from "./NavTitle";
import NavLinks from "./NavLinks";

import "./nav.css"


export default function Nav() {
  return (
    <>
      <nav className="nav">
        <NavTitle title={"React Posts App"}/>
        <NavLinks />
      </nav>
    </>
  )
}