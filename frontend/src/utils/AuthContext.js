import React, { useState, createContext, useEffect } from "react";
import { useAuth } from "./useAuth";

const AuthContext = createContext();
const NAME_TOKEN = "access_token";

function AuthProvider({ children }) {
  const auth = useAuth();
  const [authenticated, setAuthenticated] = useState(true);
  const { setData, error } = auth;

  const handleLogin = (setData) => {
    console.log(setData);
    auth.signIn(setData);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    window.localStorage.removeItem(NAME_TOKEN);
  };

  const handleSignUp = async (setData) => {
    return await auth.signUp(setData);
  };

  useEffect(() => {
    const token = window.localStorage.getItem(NAME_TOKEN);
    if (token) {
      setAuthenticated(true);
    } else if (error === "" && setData.user) {
      setAuthenticated(true);
      !token && window.localStorage.setItem(NAME_TOKEN, setData.user);
    } else {
      setAuthenticated(false);
      window.localStorage.removeItem(NAME_TOKEN);
    }
  }, [JSON.stringify(setData), error]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        error,
        setAuthenticated,
        handleLogin,
        handleLogout,
        handleSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
