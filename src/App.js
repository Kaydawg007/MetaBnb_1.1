import React, { useContext } from "react";
import AuthContext from "./components/Store/AuthContext";
import AuthProvider from "./components/Store/AuthProvider";
import FirstPage from "./components/Pages/FirstPage";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <AuthProvider>
      <FirstPage />
    </AuthProvider>
  );
};

export default App;
