import "./App.scss";

import { Switch, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Landing from "../Landing/Landing";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import LoginModal from "../Modals/LoginModal/LoginModal";
import EditAccountModal from "../Modals/EditAccountModal/EditAccountModal";
import PhoneNumberModal from "../Modals/PhoneNumberModal/PhoneNumberModal";
import ProfileForm from "../ProfileForm/ProfileForm";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ActiveModalContext } from "../../contexts/ActiveModalContext";

function App() {
  /* ------------------------------- Use States ------------------------------- */

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");

  /* ----------------------------- Modal handlers ----------------------------- */

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditAccountModal = () => {
    setActiveModal("edit-account");
  };

  const handleNumberModal = () => {
    setActiveModal("number");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAltClick = () => {
    if (activeModal === "login") {
      handleCloseModal();
      handleNumberModal();
    } else {
      handleCloseModal();
      handleLoginModal();
    }
  };

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
      <ActiveModalContext.Provider value={{ activeModal }}>
        <Switch>
          <Route exact path="/">
            <Landing
              onLogin={handleLoginModal}
              onRegister={handleNumberModal}
            />

            {activeModal === "login" && (
              <LoginModal
                onClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                onClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
            {activeModal === "edit-account" && (
              <EditAccountModal onClose={handleCloseModal} />
            )}
            {activeModal === "number" && (
              <PhoneNumberModal
                onClose={handleCloseModal}
                handleSubmit={handleRegisterModal}
                onAltClick={handleAltClick}
              />
            )}
          </Route>
          <Route path="/create-profile">{/* <ProfileForm /> */}</Route>
        </Switch>
      </ActiveModalContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
