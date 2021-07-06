import { AUTH, LOGOUT } from "../constants/actionTypes";
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("PROFILE", JSON.stringify({ ...action.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem("PROFILE");
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
