import React from "react";

const AuthContext = React.createContext({
  modalState: null,
  toggleHandler: () => {},
  wcModalState: null,
  wcToggleFunction: () => {},
});

export default AuthContext;
