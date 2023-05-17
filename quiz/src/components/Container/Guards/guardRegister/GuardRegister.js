import React from "react";
import { useAppContext } from "../../../../context/AppContext";
import LogOut from "../../../Presentational/logOut/LogOut";
import RegistrationForm from "../../../Presentational/registrationForm/RegistrationForm";

const GuardRegister = () => {
  const { state } = useAppContext();
  return <div>{state.isLogged ? <LogOut /> : <RegistrationForm />}</div>;
};

export default GuardRegister;
