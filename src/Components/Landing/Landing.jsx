import "./Landing.scss";
import Logo from "../../assets/logo-placeholder-black.svg";

function Landing() {
  return (
    <>
      <div className="landing__background">
        <div className="landing__background-left-side"></div>
        <div className="landing__background-separator"></div>
        <div className="landing__background-right-side">
          <div className="landing__background-circle"></div>
        </div>
      </div>
      <header className="header">
        <img className="header__logo" src={Logo} />
        <button className="header__button-login">Login</button>
      </header>
      <main className="main">
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
            <button className="main__register-button">here</button>
            <p className="main__register-subtext">(it's ✨free✨)</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
