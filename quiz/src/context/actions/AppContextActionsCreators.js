import {
  ADDTOCART,
  LOGIN,
  REMOVEITEM,
  SIGNOUT,
  SIGNUP,
} from "./AppContextActions";

function loginStatus(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

function addToCart(payload) {
  return {
    type: ADDTOCART,
    payload: {
      ...payload,
      price: payload.price,
    },
  };
}

function removeItem(payload) {
  return {
    type: REMOVEITEM,
    payload,
  };
}

function handleSignUp(payload) {
  return {
    type: SIGNUP,
    payload,
  };
}

function handleSignOut() {
  return {
    type: SIGNOUT,
  };
}

export { loginStatus, addToCart, removeItem, handleSignUp, handleSignOut };
