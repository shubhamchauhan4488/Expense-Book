import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: "Login",
  uid: uid
});
export const logout = () => ({
  type: "Logout"
});

export const startLogin = () => {
  //Asyncronous action
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
