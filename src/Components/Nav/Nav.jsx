import "./Nav.scss";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <nav className="nav">
      <NavLink
        to="/something"
        className="nav__link "
        activeClassName="nav__link_active"
      >
        Explore
      </NavLink>
      <NavLink
        to="/somethingelse"
        className="nav__link"
        activeClassName="nav__link_active"
      >
        Messages
      </NavLink>
      <NavLink
        to="/somethingelse"
        className="nav__link"
        activeClassName="nav__link_active"
      >
        Profile
      </NavLink>
    </nav>
  );
}

export default Nav;
