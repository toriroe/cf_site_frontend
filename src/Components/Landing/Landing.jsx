import "./Landing.scss";
import Logo from "../../assets/images/logo-placeholder-white.svg";
import { ActiveModalContext } from "../../contexts/ActiveModalContext";
import { useContext } from "react";

function Landing({ onLogin, onRegister }) {
  const { activeModal } = useContext(ActiveModalContext);
  return (
    <div
      className={`landing ${activeModal !== "" ? "landing_modal-open" : ""}`}
    >
      <header className="landing__header">
        <img className="landing__header-logo" src={Logo} alt="logo" />
        <button className="landing__header-button" onClick={onLogin}>
          Login
        </button>
      </header>
      <main className="main">
        <section className="hero">
          <h1 className="hero__heading">Fence-sitters?</h1>
          <p className="hero__subtext">...we don't do that here.</p>
        </section>
        <section className="info">
          <p className="info__text">
            A dating site <span className="info__text-italic">exclusively</span>{" "}
            for the childfree.{" "}
          </p>
        </section>
        <section className="register">
          <div className="register__image"></div>
          <div className="register__text">
            <h2 className="register__text-header">Get started</h2>
            <button className="register__text-button" onClick={onRegister}>
              here
            </button>
            <p className="register__text-subtext">(it's ✨free✨)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
