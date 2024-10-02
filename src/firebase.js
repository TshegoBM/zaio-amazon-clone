import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmSHMLI9RH0HVNyoSg3PxfAjw3kUkf2sM",
  authDomain: "zaio-amzn-clone-e83bf.firebaseapp.com",
  projectId: "zaio-amzn-clone-e83bf",
  storageBucket: "zaio-amzn-clone-e83bf.appspot.com",
  messagingSenderId: "1040852435376",
  appId: "1:1040852435376:web:1a1affdee1352bd8029675",
  measurementId: "G-C27H539SZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
;
export {db, auth}
