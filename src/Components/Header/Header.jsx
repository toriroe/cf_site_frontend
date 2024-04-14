import "./_Header.scss";
import Nav from "../Nav/Nav";
import Logo from "../../assets/images/logo-placeholder-white.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header() {
  const currentUser = useContext(CurrentUserContext);
  const avatarExists = currentUser.avatar !== undefined ? true : false;

  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} alt="logo" />
        <div className="header__user">
          <p className="header__user-name">{currentUser.name}Username</p>

          {avatarExists ? (
            <button className="header__user-avatar">
              <img
                className="header__user-avatar-image"
                src={currentUser.avatar}
                alt="avatar"
              />
            </button>
          ) : (
            <button className="header__user-placeholder">
              <p className="header__user-placeholder-letter">N</p>
            </button>
          )}
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
