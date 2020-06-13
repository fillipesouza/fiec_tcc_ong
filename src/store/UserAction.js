import * as SecureStore from "expo-secure-store";

// USERS
export const USER_LOGIN = "USER_LOGIN";

export const authenticateUser = (email, password, isSignUp) => {
  return async (dispatch) => {
    let command = "signInWithPassword";
    if (isSignUp) {
      command = "signUp";
    }

    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${command}?key=AIzaSyCRkVJiC064BBLA0wbqwUBqarU0mM2q4hw`;

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const result = await response.json();

    if (result.error) {
      console.log(result.error);
    }
    const { idToken, localId, expiresIn } = result;
    const expiryTime = new Date();
    expiryTime.setSeconds(expiryTime.getSeconds() + expiresIn);
    const authInfo = JSON.stringify({
      email,
      idToken,
      localId,
      expiryTime: expiryTime.toString(),
    });
    await SecureStore.setItemAsync("credentials", authInfo);

    dispatch({
      type: USER_LOGIN,
      token: idToken,
      userId: localId,
      expiryTime,
      email,
    });
  };
};

export const autoLogin = (token, userId, expiryTime, email) => {
  return {
    type: USER_LOGIN,
    token,
    userId,
    expiryTime,
    email,
  };
};

export const USER_LOGOUT = "USER_LOGOUT";

export const logout = () => {
  return async (dispatch) => {
    await SecureStore.deleteItemAsync("credentials");
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
