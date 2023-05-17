import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { handleSignUp } from "../../../context/actions/AppContextActionsCreators";
import { useNavigate, Link } from "react-router-dom";
import routes from "../../../constants/routes";
import style from "./registrationform.module.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const [user, setUser] = useState(() => {
    const registeredUser = localStorage.getItem("registeredUser");
    if (registeredUser) {
      return JSON.parse(registeredUser);
    } else {
      return { email: "", password: "" };
    }
  });

  const handleSubmit = () => {
    dispatch(handleSignUp(user));
    navigate(routes.HOME);
  };

  return (
    <div>
      <section>
        <div className={style.formbox}>
          <div className={style.formvalue}>
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className={style.inputbox}>
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <label htmlFor="emailInput">Email</label>
              </div>
              <div className={style.inputbox}>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  required
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <label htmlFor="passwordInput">Password</label>
              </div>
              <button className={style.regbutton}>Sign Up</button>
              <div className={style.signin_link}>
                Already a Member?
                <Link className={style.link} to={routes.HOME}>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
