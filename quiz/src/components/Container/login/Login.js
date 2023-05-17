import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";
import { useAppContext } from "../../../context/AppContext";
import { loginStatus } from "../../../context/actions/AppContextActionsCreators";
import LoginForm from "../../Presentational/loginForm/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const { state, dispatch } = useAppContext();
  const { signUp } = state;
  const isDisabled =
    user.email === signUp.email &&
    user.email.length > 0 &&
    user.password === signUp.password &&
    user.password.length > 0;

  const handleSubmit = () => {
    navigate(routes.PRODUCTS);
    dispatch(loginStatus(true));
  };

  return (
    <LoginForm
      isDisabled={isDisabled}
      setUser={setUser}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
