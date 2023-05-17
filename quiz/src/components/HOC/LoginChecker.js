import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const LoginChecker = (OriginalComponent) => {
  return function Wrapper() {
    const { state } = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
      !state.isLogged && navigate(routes.HOME);
    }, []);
    return <div>{state.isLogged && <OriginalComponent />}</div>;
  };
};

export default LoginChecker;
