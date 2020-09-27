import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBn0KI6MkVeWzBjHPvNWqQtNCBxu85HyA0",
  authDomain: "crwn-db-2553d.firebaseapp.com",
  databaseURL: "https://crwn-db-2553d.firebaseio.com",
  projectId: "crwn-db-2553d",
  storageBucket: "crwn-db-2553d.appspot.com",
  messagingSenderId: "130255702703",
  appId: "1:130255702703:web:ec922c6742e1d32d8f625a",
  measurementId: "G-168FXW8VEW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdate = new Date();
    try {
      await userRef.set({ displayName, email, createdate, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
