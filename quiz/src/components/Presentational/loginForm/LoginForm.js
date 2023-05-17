/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../constants/routes";
import style from "./loginForm.module.css";

const LoginForm = ({ isDisabled, setUser, handleSubmit }) => {
  return (
    <section>
      <div className={style.form_box}>
        <div className={style.form_value}>
          <form>
            <h2>Login</h2>
            <div className={style.inputbox}>
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                required
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <label htmlFor="emailInput">Email</label>
            </div>
            <div className={style.inputbox}>
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                required
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <label htmlFor="passwordInput">Password</label>
            </div>
            <button
              className={style.login_button}
              type="submit"
              disabled={!isDisabled}
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className={style.signup_link}>
              Not a member?{" "}
              <Link className={style.link} to={routes.REGISTRATION}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
