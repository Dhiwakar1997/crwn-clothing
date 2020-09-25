import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyBn0KI6MkVeWzBjHPvNWqQtNCBxu85HyA0",
  authDomain: "crwn-db-2553d.firebaseapp.com",
  databaseURL: "https://crwn-db-2553d.firebaseio.com",
  projectId: "crwn-db-2553d",
  storageBucket: "crwn-db-2553d.appspot.com",
  messagingSenderId: "130255702703",
  appId: "1:130255702703:web:ec922c6742e1d32d8f625a",
  measurementId: "G-168FXW8VEW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
