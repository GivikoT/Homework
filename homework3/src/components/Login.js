/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./loginStyle.css";
import Content from "./Content";

const Login = () => {
  const [user, checkUser] = useState({ email: "", password: "" });
  const [content, setContent] = useState(false);
  const isDisabled =
    user.email === "digitalAcademy@gmail.com" &&
    user.password === "iLoveReact123";
  return (
    <div>
      {content ? (
        <Content />
      ) : (
        <div className="center">
          <h1>Login</h1>
          <form
            method="post"
            onSubmit={() => {
              if (isDisabled) {
                setContent(true);
              }
            }}
          >
            <div className="txt-field">
              <input
                type="text"
                required
                onChange={(e) =>
                  checkUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt-field">
              <input
                type="password"
                required
                onChange={(e) =>
                  checkUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <button className="submit" type="submit" disabled={!isDisabled}>
              Submit
            </button>
            <div className="signup-link">
              Not a member? <a href="">Sign Up</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
