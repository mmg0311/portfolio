import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "mohak-gadge.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: "mohak-gadge",
  storageBucket: "mohak-gadge.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(config);
var db = firebase.firestore();

export { db };
