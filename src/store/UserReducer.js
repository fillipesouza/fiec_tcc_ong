import { USER_LOGIN, USER_LOGOUT } from "./UserAction";

const initialState = {
  token: null,
  userId: null,
  expiryTime: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // USERS
    case USER_LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        expiryTime: null,
      };
    default:
      return state;
  }
};
