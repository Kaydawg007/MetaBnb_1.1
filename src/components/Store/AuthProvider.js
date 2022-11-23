import React from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthProvider = (props) => {
  const [open, closeModal] = useState(true);
  const [wcModal, setWcModal] = useState(false);

  const mobileToggleNavHandler = () => {
    closeModal(!open);
  };

  const wcToggleHandler = () => {
    setWcModal(!wcModal);
    closeModal(true);
  };

  const AuthFunction = {
    modalState: open,
    toggleHandler: mobileToggleNavHandler,
    wcModalState: wcModal,
    wcToggleFunction: wcToggleHandler,
  };

  return (
    <AuthContext.Provider value={AuthFunction}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
