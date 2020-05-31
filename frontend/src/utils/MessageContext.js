import React, { useState, createContext } from "react";
const MessageContext = createContext();

function MessageProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export { MessageContext, MessageProvider };
