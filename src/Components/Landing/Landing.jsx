import "./Landing.scss";
import Logo from "../../assets/images/logo-placeholder-black.svg";
import { ActiveModalContext } from "../../contexts/ActiveModalContext";
import { useContext } from "react";

function Landing({ onLogin, onRegister }) {
  const { activeModal } = useContext(ActiveModalContext);
  return (
    <div className="landing ">
      <div
        className={`landing__background ${
          activeModal !== "" ? "landing__background_modal-open" : ""
        }`}
      >
        <div className="landing__background-left-side"></div>
        <div className="landing__background-separator"></div>
        <div className="landing__background-right-side">
          <div className="landing__background-circle"></div>
        </div>
      </div>
      <header
        className={`header ${activeModal !== "" ? "header_modal-open" : ""}`}
      >
        <img className="header__logo" src={Logo} />
        <button className="header__button-login" onClick={onLogin}>
          Login
        </button>
      </header>
      <main className={`main ${activeModal !== "" ? "main_modal-open" : ""}`}>
        <div className="main__left">
          <h1 className="main__title">Fence-sitters?</h1>
          <p className="main__subtitle">...we don't do that here.</p>
        </div>
        <div className="main__right">
          <p className="main__description">
            A dating site{" "}
            <span className="main__description-italic">exclusively</span> for
            the childfree.
          </p>
          <div className="main__register">
            <p className="main__register-text">Get started</p>
            <button className="main__register-button" onClick={onRegister}>
              here
            </button>
            <p className="main__register-subtext">(it's ✨free✨)</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
