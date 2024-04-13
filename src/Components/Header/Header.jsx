import "./Header.scss";
import Nav from "../Nav/Nav";
import Logo from "../../assets/images/logo-placeholder-white.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} />
        <div className="header__user">
          <p className="header__user-name">Username</p>
          <button className="header__user-placeholder">
            <p className="header__user-placeholder-letter">N</p>
          </button>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
