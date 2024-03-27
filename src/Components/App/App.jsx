import "./App.scss";

import { Switch, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Landing from "../Landing/Landing";
import ModalWithForm from "../Modals/ModalWithForm/ModalWithForm";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <ModalWithForm /> */}
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
