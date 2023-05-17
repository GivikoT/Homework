import React from "react";
import { useAppContext } from "../../../../context/AppContext";
import Login from "../../login/Login";
import LogOut from "../../../Presentational/logOut/LogOut";

const GuardLogin = () => {
  const { state } = useAppContext();
  return <div>{state.isLogged ? <LogOut /> : <Login />}</div>;
};

export default GuardLogin;
