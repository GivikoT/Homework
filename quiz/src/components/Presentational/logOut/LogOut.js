import React from "react";
import style from "./logOut.module.css";
import { useAppContext } from "../../../context/AppContext";
import { handleSignOut } from "../../../context/actions/AppContextActionsCreators";

const LogOut = () => {
  const { dispatch } = useAppContext();
  return (
    <div>
      <div className={style.logged}>
        <h1>You are already logged in</h1>
      </div>
      <button
        className={style.button}
        onClick={() => dispatch(handleSignOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
