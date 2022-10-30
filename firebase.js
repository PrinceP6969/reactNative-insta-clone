import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDNLf9106YKPQGppQesBjTHISN8BIl9Og",
  authDomain: "insta-reactnative-clone.firebaseapp.com",
  projectId: "insta-reactnative-clone",
  storageBucket: "insta-reactnative-clone.appspot.com",
  messagingSenderId: "481896016714",
  appId: "1:481896016714:web:b5ea2b86b1b0780979afb3",
  measurementId: "G-2RE8ZHXQ16",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
