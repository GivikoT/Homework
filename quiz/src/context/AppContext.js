import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./AppContextReducer";

const appContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!appContext) {
    throw new Error("appContext Error");
  }
  return context;
};

export default AppContext;
