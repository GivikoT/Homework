/* eslint-disable no-case-declarations */
import {
  ADDTOCART,
  LOGIN,
  REMOVEITEM,
  SIGNOUT,
  SIGNUP,
} from "./actions/AppContextActions";

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, isLogged: payload };
    case ADDTOCART:
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              price: item.price + payload.price,
            };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, payload] };
      }
    case REMOVEITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case SIGNUP:
      const registeredUsers = localStorage.getItem("registeredUsers");
      let usersArray = [];
      if (registeredUsers) {
        usersArray = JSON.parse(registeredUsers);
      }
      usersArray.push(payload);
      localStorage.setItem("registeredUsers", JSON.stringify(usersArray));
      return {
        ...state,
        signUp: {
          email: payload.email,
          password: payload.password,
        },
      };
    case SIGNOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      break;
  }
}

const initialState = {
  isLogged: false,
  cart: [],
  signUp: { email: "", password: "" },
};

export { reducer, initialState };
