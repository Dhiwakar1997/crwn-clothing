import firebase from "firebase/app";
import "firebase/firestore";

const firebase = firebase.firestore();
firestore
  .collection("users")
  .doc("bjxCfzEinBUNAbrL2kum")
  .collection("cartItems")
  .doc("5bWwhnO7cUGm66Hfh1j9");

firestore.doc("/users/bjxCfzEinBUNAbrL2kum/cartItems/5bWwhnO7cUGm66Hfh1j9");
